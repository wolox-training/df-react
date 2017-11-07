import React from 'react';
import PropTypes from 'prop-types';

import avatarWbooksPng from '../../assets/avatar-wbooks.png';
import './BookCommentCreator.css';

function BookCommentCreator(props) {
  return (
    <div className="book-comment-creator-container">
      <img className="book-comment-creator-avatar" src={avatarWbooksPng} alt="Avatar" />
      <div className="book-comment-creator-form-container">
        <span className="book-comment-creator-title">Agregar comentario</span>
        <textarea
          className="book-comment-creator-text"
          onChange={e => props.newCommentChanged(e.target.value)}
        />
        <button className="book-comment-creator-button" onClick={props.newCommentHandler}>
          Enviar
        </button>
      </div>
    </div>
  );
}

BookCommentCreator.propTypes = {
  newCommentHandler: PropTypes.func.isRequired,
  newCommentChanged: PropTypes.func.isRequired
};

export default BookCommentCreator;
