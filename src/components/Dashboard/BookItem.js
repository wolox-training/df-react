import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './BookItem.css';
import defaultBookSvg from '../../assets/default_book_image.jpg';

const getImage = book => book.image_url || defaultBookSvg;

function BookItem(props) {
  return (
    <div className="book-container">
      <Link to={{ pathname: `/books/${props.book.id}`, state: { book: props.book } }}>
        <img className="book-img" alt="Book" src={getImage(props.book)} />
      </Link>
      <span className="book-title">{props.book.title}</span>
      <span className="book-author">{props.book.author}</span>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};

export default BookItem;
