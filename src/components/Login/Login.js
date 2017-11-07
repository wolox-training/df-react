import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './Login.css';
import avatarWbooksPng from '../../assets/avatar-wbooks.png';

const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    focusInvalidEmail: false,
    focusInvalidPassword: false,
    loggedIn: localStorage.token
  };

  axiosInstance = axios.create({
    baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/'
  });

  emailChanged = e => {
    const email = e.target.value;
    const emailError = this.validateEmail(email);
    this.setState({ email, emailError, focusInvalidEmail: false });
  };

  passwordChanged = e => {
    const password = e.target.value;
    const passwordError = this.validatePassword(password);
    this.setState({ password, passwordError, focusInvalidPassword: false });
  };

  validatePassword = password => {
    if (password.length >= 8 && password.length < 52) {
      return '';
    }
    return 'Password must have between 8 and 52 characters';
  };

  validateEmail = email => {
    if (email.length === 0) {
      return 'Email cannot be empty';
    } else if (EMAIL_REGEX.test(email)) {
      return '';
    }
    return 'Email must have a valid format';
  };

  logInHandler = () => {
    if (!this.state.emailError && !this.state.passwordError) {
      this.setState({ focusInvalidPassword: false, focusInvalidEmail: false });
      this.axiosInstance
        .post('/users/sessions', {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          localStorage.token = response.data.access_token;
          this.setState({ loggedIn: true });
        })
        .catch(error => {
          alert(error); // eslint-disable-line no-alert
        });
    }
    if (this.state.emailError) {
      this.setState({ focusInvalidEmail: true });
    }
    if (this.state.passwordError) {
      this.setState({ focusInvalidPassword: true });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect push to="/" />;
    }
    return (
      <form className="login-form">
        <img className="login-logo" src={avatarWbooksPng} alt="logo" />
        <label className="login-form-field" htmlFor="email-input">
          Email
          <input
            className={`login-form-input ${this.state.focusInvalidEmail ? 'invalid' : ''}`}
            id="email-input"
            type="text"
            value={this.state.email}
            onChange={this.emailChanged}
          />
          <span className="login-form-error">{this.state.emailError}</span>
        </label>
        <label className="login-form-field" htmlFor="password-input">
          Password
          <input
            className={`login-form-input ${this.state.focusInvalidPassword ? 'invalid' : ''}`}
            id="password-input"
            type="password"
            value={this.state.password}
            onChange={this.passwordChanged}
          />
          <span className="login-form-error">{this.state.passwordError}</span>
        </label>
        <button type="button" className="login-form-accept-button" onClick={this.logInHandler}>
          Log in
        </button>
      </form>
    );
  }
}

export default Login;
