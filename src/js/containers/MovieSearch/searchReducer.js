import { SEARCH_MOVIE } from '../../actions/actionTypes';

const initialState = {

};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
