import React from 'react';
import PropTypes from 'prop-types';

import { BookItem } from './BookItem';
import './BookList.css';

const getItem = book => <BookItem key={`book_${book.id}`} book={book} />;

export const BookList = props => <div className="book-list">{props.books.map(book => getItem(book))}</div>;

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
