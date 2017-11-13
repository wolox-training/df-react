import { combineReducers, createStore } from 'redux/dist/redux';
import thunk from 'redux-thunk';
import applyMiddleware from 'redux/es/applyMiddleware';
import { reducer as form } from 'redux-form';

import BookService from '../services/BookService';

const defaultState = {
  comments: [],
  books: { filterType: '', filterValue: '', typingFilterType: '', typingFilterValue: '', list: [] }
};

const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [
          ...state.comments,
          { id: state.comments.length + 1, name: 'Kimberly Carter', date: '11/11/11', comment: action.text }
        ]
      };
    default:
      return state;
  }
};

export const actionCreators = {
  fetchBooks(title, author) {
    return dispatch => {
      dispatch({ type: 'FETCH_BOOK_LOADING' });
      BookService.getBooks(title, author)
        .then(response => {
          dispatch({ type: 'FETCH_BOOK_SUCCESS', books: response.data });
        })
        .catch(err => {
          dispatch({ type: 'FETCH_BOOK_ERROR', err });
        });
    };
  },
  updateFilterType(filterType) {
    return dispatch => dispatch({ type: 'BOOK_FILTER_TYPE_CHANGED', filterType });
  },
  updateFilterValue(filterValue) {
    return dispatch => dispatch({ type: 'BOOK_FILTER_VALUE_CHANGED', filterValue });
  },
  filterBooks() {
    return dispatch => dispatch({ type: 'TRIGGER_FILTER_BOOKS' });
  }
};

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_SUCCESS':
      return { ...state, books: { ...state.books, list: action.books } };
    case 'FETCH_BOOK_ERROR':
      return { ...state, shouldLogout: true };
    case 'FETCH_BOOK_LOADING':
      return { ...state, loadingBooks: true };
    case 'BOOK_FILTER_TYPE_CHANGED':
      return { ...state, books: { ...state.books, typingFilterType: action.filterType } };
    case 'BOOK_FILTER_VALUE_CHANGED':
      return { ...state, books: { ...state.books, typingFilterValue: action.filterValue } };
    case 'TRIGGER_FILTER_BOOKS':
      return {
        ...state,
        books: {
          ...state.books,
          filterType: state.books.typingFilterType,
          filterValue: state.books.typingFilterValue
        }
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  form,
  commentsReducer,
  booksReducer
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  applyMiddleware(thunk)
);

export default store;
