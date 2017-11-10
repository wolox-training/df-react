import React from 'react';
import { Redirect } from 'react-router-dom';

import BooksService from '../../services/BooksService';

import BookInformation from './BookInformation';
import BookSuggestions from './BookSuggestions';
import BookComments from './BookComments';

class BookDetail extends React.Component {
  state = {};

  componentDidMount = () => {
    BooksService.getBookDetail(this.props.match.params.id) // eslint-disable-line react/prop-types
      .then(response => {
        this.setState({ book: response.data });
      });
  };

  render() {
    if (this.state.noAuth) {
      return <Redirect push to="/login" />;
    }
    if (!this.state.book) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <BookInformation book={this.state.book} />
        <BookSuggestions />
        <BookComments />
      </div>
    );
  }
}

export default BookDetail;
