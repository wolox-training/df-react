import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import BookCommentCreator from './BookCommentCreator';
import BookCommentList from './BookCommentList';
import './BookComments.css';

function BookComments({ onNewCommentClick, comments }) {
  return (
    <div className="book-comments-container">
      <span className="book-comments-title">Comentarios</span>
      <div className="book-comments-content-container">
        <BookCommentCreator createComment={onNewCommentClick} />
        <BookCommentList comments={comments} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  comments: state.commentsReducer.comments
});

const mapDispatchToProps = dispatch => ({
  onNewCommentClick: text => dispatch({ type: 'ADD_COMMENT', text })
});

BookComments.contextTypes = {
  store: PropTypes.object
};

BookComments.propTypes = {
  onNewCommentClick: PropTypes.func,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
      comment: PropTypes.string
    })
  ).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookComments);
