import { FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED } from '../../actions/actionTypes';

const initialState = {};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_FULFILLED:
      return action.payload.data;
    case FETCH_MOVIE_REJECTED:
      return action.payload;
    default:
      return state;
  }
}
