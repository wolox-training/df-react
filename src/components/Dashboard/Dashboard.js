import React from 'react';
import { Redirect } from 'react-router-dom';

import books from '../../assets/books.json';

import BookList from './BookList';
import BookFilter from './BookFilter';

class Dashboard extends React.Component {
  state = {
    toBookDetail: false,
    currentFilterType: '',
    currentFilterValue: '',
    filteredBooks: books
  };

  selectFilterType = filter => {
    this.setState({ currentFilterType: filter });
  };

  selectFilterValue = filter => {
    this.setState({ currentFilterValue: filter });
  };

  filterBooks = () => {
    if (!this.state.currentFilterValue || !this.state.currentFilterType) {
      this.setState({ filteredBooks: books });
    } else {
      this.setState({
        filteredBooks: books.filter(
          book => book[this.state.currentFilterType.toLowerCase()] === this.state.currentFilterValue
        )
      });
    }
  };

  render() {
    if (this.state.toBookDetail) {
      return <Redirect push to={`/books/${this.state.bookId}`} />;
    }

    return (
      <div>
        <BookFilter
          currentFilterType={this.state.currentFilterType}
          selectFilterType={this.selectFilterType}
          selectFilterValue={this.selectFilterValue}
          searchBooks={this.filterBooks}
        />
        <BookList books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default Dashboard;
