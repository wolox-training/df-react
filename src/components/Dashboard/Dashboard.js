import React from 'react';
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import { actionCreators } from '../redux/Store';

import BookList from './BookList';
import BookFilter from './BookFilter';

const FILTER_AUTHOR_KEY = 'Author';
const FILTER_TITLE_KEY = 'Title';

class Dashboard extends React.Component {
  componentDidMount = () => this.props.fetchBooks();

  updateBooks = () => {
    let title = '';
    let author = '';
    if (this.props.typingFilterType === FILTER_AUTHOR_KEY) {
      author = this.props.typingFilterValue;
    } else if (this.props.typingFilterType === FILTER_TITLE_KEY) {
      title = this.props.typingFilterValue;
    }
    this.props.fetchBooks(author, title);
  };

  render() {
    if (this.props.shouldLogout) {
      return <Redirect push to="/login" />;
    }
    return (
      <div>
        <BookFilter
          filterType={this.props.typingFilterType}
          filterValue={this.props.typingFilterValue}
          updateFilterType={this.props.updateFilterType}
          updateFilterValue={this.props.updateFilterValue}
          searchBooks={this.updateBooks}
        />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

Dashboard.propTypes = {
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
  ),
  typingFilterValue: PropTypes.string,
  typingFilterType: PropTypes.string,
  updateFilterType: PropTypes.func,
  updateFilterValue: PropTypes.func,
  fetchBooks: PropTypes.func,
  shouldLogout: PropTypes.bool
};

const getBooks = state => state.booksReducer.books.list;
const getTypingFilterType = state => state.booksReducer.books.typingFilterType;
const getTypingFilterValue = state => state.booksReducer.books.typingFilterValue;
const getShouldLogout = state => state.booksReducer.shouldLogout;

const mapStateToProps = state => ({
  books: getBooks(state),
  typingFilterType: getTypingFilterType(state),
  typingFilterValue: getTypingFilterValue(state),
  noAuth: getShouldLogout(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: (title, author) => dispatch(actionCreators.fetchBooks(title, author)),
  updateFilterType: filterType => dispatch(actionCreators.updateFilterType(filterType)),
  updateFilterValue: filterValue => dispatch(actionCreators.updateFilterValue(filterValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
