import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {ErrorMessage, InputType} from "../constants";

function withSignInFormValidation(Component) {
  class WithSignInFormValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorMessage: ``,
        emailValidity: true,
        passValidity: true,
      };

      this.email = null;
      this.password = null;

      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onFormChange = this.onFormChange.bind(this);
      this.onInputFocus = this.onInputFocus.bind(this);
    }

    isEmailCorrect() {
      const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      return (emailPattern.test(this.email));
    }

    isPasswordTyped() {
      if (this.password) {
        return true;
      } else {
        return false;
      }
    }

    checkValidity(emailValidity, passValidity) {
      if (!emailValidity && !passValidity) {
        this.setState({
          errorMessage: ErrorMessage.ALL,
          emailValidity: false,
          passValidity: false,
        });
      } else if (!emailValidity) {
        this.setState({
          errorMessage: ErrorMessage.EMAIL,
          emailValidity: false,
          passValidity: true,
        });
      } else if (!passValidity) {
        this.setState({
          errorMessage: ErrorMessage.PASSWORD,
          emailValidity: true,
          passValidity: false,
        });
      } else {
        this.setState({
          errorMessage: ``,
          emailValidity: true,
          passValidity: true,
        });
      }
    }

    onFormChange(evt) {
      switch (evt.target.type) {
        case InputType.EMAIL:
          this.email = evt.target.value;
          break;
        case InputType.PASSWORD:
          this.password = evt.target.value;
          break;
      }
    }

    onInputFocus(evt) {
      switch (evt.target.type) {
        case InputType.EMAIL:
          this.setState({
            emailValidity: true
          });
          break;
        case InputType.PASSWORD:
          this.setState({
            passValidity: true
          });
          break;
      }
    }

    onFormSubmit(e) {
      e.preventDefault();
      this.checkValidity(this.isEmailCorrect(), this.isPasswordTyped());
      if (this.isEmailCorrect() && this.isPasswordTyped()) {
        this.props.onFormSubmit({
          email: this.email,
          password: this.password,
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmit = {this.onFormSubmit}
          onChange = {this.onFormChange}
          onFocus = {this.onInputFocus}
          errorMessage = {this.state.errorMessage}
          emailValidity = {this.state.emailValidity}
          passValidity = {this.state.passValidity}
        />
      );
    }
  }

  WithSignInFormValidation.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  return WithSignInFormValidation;
}

export default withSignInFormValidation;
