import React from 'react';

import books from './books.json';
import BookList from './BookList';
import BookFilter from './BookFilter';

class Dashboard extends React.Component {
  state = {
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
