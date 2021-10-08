import { FETCH_MOVIE_DEETS_FULFILLED, FETCH_MOVIE_DEETS_REJECTED } from '../../actions/actionTypes';

const initialState = {};
const error = 'Details for this Movie Could Not be Found';

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DEETS_FULFILLED:
      console.log('movie deets: ', action.payload.data);
      return action.payload.data;
    case FETCH_MOVIE_DEETS_REJECTED:
      return error;
    default:
      return state;
  }
}
