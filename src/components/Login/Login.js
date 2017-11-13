import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field, Form } from 'redux-form';

import AxiosInstance from '../../config/AxiosInstance';
import './Login.css';
import avatarWbooksPng from '../../assets/avatar-wbooks.png';

import LoginInput from './LoginInput';

const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    showFieldErrors: false,
    loggedIn: localStorage.token
  };

  emailChanged = e => {
    const email = e.target.value;
    const emailError = this.validateEmail(email);
    this.setState({ email, emailError });
  };

  passwordChanged = e => {
    const password = e.target.value;
    const passwordError = this.validatePassword(password);
    this.setState({ password, passwordError });
  };

  logInHandler = () => {
    debugger;
    this.setState({ showFieldErrors: true });
    if (!this.state.emailError && !this.state.passwordError) {
      AxiosInstance.post('/users/sessions', {
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
          localStorage.token = response.data.access_token;
          AxiosInstance.defaults.headers.common.Authorization = localStorage.token;
          debugger;
          this.setState({ loggedIn: true });
        })
        .catch(error => {
          alert(error); // eslint-disable-line no-alert
        });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect push to="/" />;
    }
    return (
      <Form className="login-form" onSubmit={this.logInHandler}>
        <img className="login-logo" src={avatarWbooksPng} alt="logo" />
        <label className="login-form-field" htmlFor="email-input">
          Email
          <Field
            id="email-input"
            name="email"
            type="text"
            component={LoginInput}
            showErrors={this.state.showFieldErrors}
          />
        </label>
        <label className="login-form-field" htmlFor="password-input">
          Password
          <Field
            id="password-input"
            name="password"
            type="password"
            component={LoginInput}
            showErrors={this.state.showFieldErrors}
          />
        </label>
        <button type="submit" className="login-form-accept-button">
          Log in
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate: values => {
    const errors = {};
    errors.email = !values.email
      ? 'Email field is required'
      : !EMAIL_REGEX.test(values.email) ? 'Email format is invalid' : undefined;

    errors.password = !values.password
      ? 'Password field is required'
      : values.password.length < 8 || values.password.length > 52
        ? 'Password must be at least 8 characters long'
        : undefined;

    return errors;
  }
})(Login);
