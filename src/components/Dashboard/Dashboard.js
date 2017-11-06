import React from 'react';

import books from './books.json';
import BookList from './BookList';
import BookFilter from './BookFilter';

class Dashboard extends React.Component {
  state = { books };

  render() {
    return (
      <div>
        <BookFilter />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Dashboard;