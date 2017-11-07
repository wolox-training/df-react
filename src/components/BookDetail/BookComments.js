import React from 'react';

import BookCommentCreator from './BookCommentCreator';
import BookCommentList from './BookCommentList';
import './BookComments.css';

class BookComments extends React.Component {
  state = {
    comments: [
      { id: 1, name: 'Kimberly Carter', date: '10/10/10', comment: 'The first comment' },
      { id: 2, name: 'Kimberly Carter', date: '10/10/10', comment: 'The second comment' }
    ],
    newCommentText: ''
  };

  newCommentHandler = () => {
    const id = this.state.comments[this.state.comments.length - 1].id + 1;
    const commentsCopy = this.state.comments.slice();
    const newComment = {
      id,
      name: 'Kimberly Carter',
      date: '11/11/11',
      comment: this.state.newCommentText
    };
    commentsCopy.push(newComment);
    this.setState({ comments: commentsCopy });
  };

  newCommentChanged = text => {
    this.setState({ newCommentText: text });
  };

  render() {
    return (
      <div className="book-comments-container">
        <span className="book-comments-title">Comentarios</span>
        <div className="book-comments-content-container">
          <BookCommentCreator
            newCommentHandler={this.newCommentHandler}
            newCommentChanged={this.newCommentChanged}
          />
          <BookCommentList comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default BookComments;
