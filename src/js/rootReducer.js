import { combineReducers } from 'redux';
import searchReducer from './containers/MovieSearch/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
