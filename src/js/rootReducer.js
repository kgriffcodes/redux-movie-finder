import { combineReducers } from 'redux';
import searchReducer from './containers/MovieSearch/searchReducer';
import detailReducer from './containers/MovieDetail/detailReducer';

const rootReducer = combineReducers({
  movieChoices: searchReducer,
  movieDetails: detailReducer,
});

export default rootReducer;
