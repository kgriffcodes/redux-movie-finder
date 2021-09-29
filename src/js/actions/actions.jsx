import axios from 'axios';

export const fetchMovie = searchShortCode => ({
  type: 'FETCH_MOVIE',
  payload: axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${searchShortCode}`)
});

export const fetchPoster = searchShortCode => ({
  type: 'FETCH_POSTER',
  payload: axios.get(`http://img.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${searchShortCode}`)
});
