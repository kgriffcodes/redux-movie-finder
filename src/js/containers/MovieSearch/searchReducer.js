import { FETCH_MOVIE, FETCH_POSTER } from '../../actions/actionTypes';

const initialState = {
  movie: {
    title: '',
    year: '',
    plot: ''
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
    case FETCH_POSTER:
      return action.payload;
    default:
      return state;
  }
}
