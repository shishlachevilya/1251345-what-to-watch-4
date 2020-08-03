import React from "react";
import PropTypes from "prop-types";

const SignInForm = (props) => {
  const {
    errorMessage,
    emailValidity,
    passValidity,
    onSubmit,
    onChange,
    onFocus
  } = props;

  const makeErrorMessage = (message) => {
    if (message) {
      return (
        <div className="sign-in__message">
          <p>{message}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <form className="sign-in__form"
      noValidate={true}
      onSubmit={onSubmit}
      onChange={onChange}
    >
      {makeErrorMessage(errorMessage)}
      <div className="sign-in__fields">
        <div className={`sign-in__field ${emailValidity ? `` : `sign-in__field--error`}`}>
          <input onFocus={onFocus}
            className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className={`sign-in__field ${passValidity ? `` : `sign-in__field--error`}`}>
          <input onFocus={onFocus}
            className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  emailValidity: PropTypes.bool.isRequired,
  passValidity: PropTypes.bool.isRequired,
};

export default SignInForm;
