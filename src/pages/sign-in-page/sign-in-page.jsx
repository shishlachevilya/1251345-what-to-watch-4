import React from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import withSignInFormValidation from "../../hocs/with-sign-in-form-validation";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import {AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/celectors";

const WrapSignInForm = withSignInFormValidation(SignInForm);

const SignInPage = (props) => {
  const {loginUser, authStatus} = props;

  const onFormSubmit = (data) => {
    loginUser(data);
  };

  switch (authStatus) {
    case AuthorizationStatus.AUTH:
      return <Redirect from="/login" to="/" />;
    case AuthorizationStatus.NO_AUTH:
      return (
        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <WrapSignInForm onFormSubmit={onFormSubmit} />
          </div>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      );
    default:
      return null;
  }
};

SignInPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authStatus: PropTypes.oneOf(
      Object.values(AuthorizationStatus)
  )
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loginUser(data) {
    dispatch(UserOperation.login(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
