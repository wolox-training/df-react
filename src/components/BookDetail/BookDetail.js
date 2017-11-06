import React from 'react';

import books from '../../assets/books.json';

import BookInformation from './BookInformation';

class BookDetail extends React.Component {
  state = {
    book: books.find(book => book.id === parseInt(this.props.match.params.id, 10)) // eslint-disable-line react/prop-types
  };

  render() {
    return (
      <div>
        <BookInformation book={this.state.book} />
      </div>
    );
  }
}

export default BookDetail;
