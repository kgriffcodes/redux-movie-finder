import axios from 'axios';

export const fetchMovie = (searchShortCode) => ({
  type: 'FETCH_MOVIE',
  payload: axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchShortCode}`)
});

export const fetchMovieDetails = (imdbID) => ({
  type: 'FETCH_MOVIE_DEETS',
  payload: axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${imdbID}`)
});
