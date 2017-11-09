import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, // eslint-disable-line react/prop-types
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> // eslint-disable-line react/prop-types
      )}
  />
);

export default PrivateRoute;
