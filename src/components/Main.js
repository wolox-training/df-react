import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import BookDetail from './BookDetail/BookDetail';
import Login from './Login/Login';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
}

export default Main;
