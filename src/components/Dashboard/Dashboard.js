import React from 'react';
import { Redirect } from 'react-router-dom';

import BooksService from '../../services/BooksService';

import BookList from './BookList';
import BookFilter from './BookFilter';

class Dashboard extends React.Component {
  state = {
    bookId: undefined,
    toBookDetail: false,
    noAuth: false,
    currentFilterType: '',
    currentFilterValue: '',
    filteredBooks: []
  };

  componentDidMount = () => {
    BooksService.getBooks()
      .then(response => {
        this.allBooks = response.data;
        this.setState({ filteredBooks: response.data });
      })
      .catch(() => {
        this.setState({ noAuth: true });
      });
  };

  selectFilterType = filter => {
    this.setState({ currentFilterType: filter });
  };

  selectFilterValue = filter => {
    this.setState({ currentFilterValue: filter });
  };

  filterBooks = () => {
    if (!this.state.currentFilterValue || !this.state.currentFilterType) {
      this.setState({ filteredBooks: this.allBooks });
    } else {
      this.setState({
        filteredBooks: this.allBooks.filter(
          book => book[this.state.currentFilterType.toLowerCase()] === this.state.currentFilterValue
        )
      });
    }
  };

  render() {
    if (this.state.toBookDetail) {
      return <Redirect push to={`/books/${this.state.bookId}`} />;
    }
    if (this.state.noAuth) {
      return <Redirect push to="/login" />;
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
