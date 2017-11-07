import React from 'react';

import './Login.css'
import avatarWbooksPng from '../../assets/avatar-wbooks.png';

class Login extends React.Component {
  state = { email: '', password: '' };

  render() {
    return (
      <form className="login-form">
        <img className="login-logo" src={avatarWbooksPng} alt="logo" />
        <label className="login-form-field" htmlFor="email-input">
          Email
          <input className="login-form-input" id="email-input" type="text" />
        </label>
        <label className="login-form-field" htmlFor="password-input">
          Password
          <input className="login-form-input" id="password-input" type="password" />
        </label>
        <button className="login-form-accept-button">Log in</button>
      </form>
    );
  }
}

export default Login;
