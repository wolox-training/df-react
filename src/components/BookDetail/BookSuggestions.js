import React from 'react';

import defaultBookSvg from '../../assets/default_book.svg';
import './BookSuggestions.css';

function BookSuggestions() {
  return (
    <div className="book-suggestions-container">
      <span className="book-suggestions-title">Sugerencias</span>
      <div className="book-suggestions-options-container">
        <div className="book-suggestion-image-container">
          <img className="book-suggestion-image" src={defaultBookSvg} alt="Suggestion" />
        </div>
        <div className="book-suggestion-image-container">
          <img className="book-suggestion-image" src={defaultBookSvg} alt="Suggestion" />
        </div>
        <div className="book-suggestion-image-container">
          <img className="book-suggestion-image" src={defaultBookSvg} alt="Suggestion" />
        </div>
        <div className="book-suggestion-image-container">
          <img className="book-suggestion-image" src={defaultBookSvg} alt="Suggestion" />
        </div>
      </div>
    </div>
  );
}

export default BookSuggestions;
