import React from 'react';
import PropTypes from 'prop-types';

import './BookCommentList.css';

import avatarWbooksPng from '../../assets/avatar-wbooks.png';

function BookCommentList(props) {
  return (
    <div>
      {props.comments.map(comment => (
        <div key={`comment${comment.id}`} className="book-comment-container">
          <img className="book-comment-avatar" src={avatarWbooksPng} alt="Avatar" />
          <div className="book-comment-data-container">
            <span className="book-comment-username">{comment.name}</span>
            <span className="book-comment-date">{comment.date}</span>
            <p className="book-comment-comment">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

BookCommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
      comment: PropTypes.string
    })
  ).isRequired
};

export default BookCommentList;
