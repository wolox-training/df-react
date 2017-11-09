import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import BookDetail from './BookDetail/BookDetail';
import Login from './Login/Login';
import PrivateRoute from './routes/PrivateRoute';
import AuthRoute from './routes/AuthRoute';

import './Main.css';

function Main() {
  return (
    <main className="main">
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/books/:id" component={BookDetail} />
        <AuthRoute path="/login" component={Login} />
      </Switch>
    </main>
  );
}

export default Main;
