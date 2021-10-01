import { combineReducers } from 'redux';
import searchReducer from './containers/MovieSearch/searchReducer';

const rootReducer = combineReducers({
  movieChoices: searchReducer
});

export default rootReducer;
