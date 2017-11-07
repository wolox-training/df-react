import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import BookDetail from './BookDetail/BookDetail';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default Main;
