import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/Store';
import Dashboard from './Dashboard/Dashboard';
import BookDetail from './BookDetail/BookDetail';
import Login from './Login/Login';
import './Main.css';

function Main() {
  return (
    <Provider store={store}>
      <main className="main">
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/books/:id" component={BookDetail} />
          <AuthRoute path="/login" component={Login} />
        </Switch>
      </main>
    </Provider>
  );
}

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

export default Main;
