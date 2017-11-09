import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({
  component: Component, // eslint-disable-line react/prop-types
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} /> // eslint-disable-line react/prop-types
      ) : (
        <Component {...props} />
      )}
  />
);

export default AuthRoute;
