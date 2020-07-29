import {combineReducers} from 'redux';
import {reducer as books} from 'modules/books';

export default combineReducers({
  books,
});