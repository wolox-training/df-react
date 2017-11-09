import React from 'react';
import PropTypes from 'prop-types';

import avatarWbooksPng from '../../assets/avatar-wbooks.png';
import './BookCommentCreator.css';

class BookCommentCreator extends React.Component {
  state = { currentComment: '' };

  render() {
    return (
      <div className="book-comment-creator-container">
        <img className="book-comment-creator-avatar" src={avatarWbooksPng} alt="Avatar" />
        <div className="book-comment-creator-form-container">
          <span className="book-comment-creator-title">Agregar comentario</span>
          <textarea
            className="book-comment-creator-text"
            onChange={e => this.setState({ currentComment: e.target.value })}
          />
          <button
            className="book-comment-creator-button"
            onClick={() => this.props.newCommentHandler(this.state.currentComment)}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

BookCommentCreator.propTypes = {
  newCommentHandler: PropTypes.func.isRequired
};

export default BookCommentCreator;
