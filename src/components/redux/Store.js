import { combineReducers, createStore } from 'redux/dist/redux';

const commentsReducer = (state = { comments: [] }, action) => {
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

const reducers = combineReducers({
  commentsReducer
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

export default store;
