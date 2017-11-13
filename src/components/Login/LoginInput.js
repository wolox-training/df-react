import React from 'react';
import PropTypes from 'prop-types';

import './LoginInput.css';

function LoginInput({ input, showErrors, ...inputProps }) {
  return (
    <div className="login-input-container">
      <input
        className={`login-form-input ${inputProps.meta.valid ? 'valid' : 'invalid'}`}
        {...inputProps}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
      />
      <span className={inputProps.meta.submitFailed ? '' : 'hide'}>{`${inputProps.meta
        .error}`}</span>
    </div>
  );
}

LoginInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }),
  showErrors: PropTypes.bool
};

export default LoginInput;
