import axios from 'axios';

export const fetchMovie = searchShortCode => ({
  type: 'FETCH_MOVIE',
  payload: axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${searchShortCode}`)
});
