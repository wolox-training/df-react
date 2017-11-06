import React from 'react';
import PropTypes from 'prop-types';

import defaultBookSvg from '../../assets/default_book_image.jpg';
import './BookInformation.css';

function BookInformation(props) {
  return (
    <div className="book-information-container">
      <img className="book-information-img" src={props.book.image_url || defaultBookSvg} alt="Book" />
      <div className="book-information-details-container">
        <div className="book-information-cluster-container">
          <span className="book-information-title">{props.book.title}</span>
          <span className="book-information-details">{props.book.author}</span>
        </div>
        <div className="book-information-cluster-container">
          <span className="book-information-details book-information-details-year">{props.book.year}</span>
          <span className="book-information-details">{props.book.genre}</span>
        </div>
        <p className="book-information-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="book-information-rent-button">Alquilar</button>
      </div>
    </div>
  );
}

BookInformation.propTypes = {
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

export default BookInformation;
