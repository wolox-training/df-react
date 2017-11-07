import React from 'react';
import PropTypes from 'prop-types';

import BookItem from './BookItem';
import './BookList.css';

const getItem = book => <BookItem key={`book_${book.id}`} book={book} />;

function BookList(props) {
  return <div className="book-list">{props.books.map(getItem)}</div>;
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired
};

export default BookList;
