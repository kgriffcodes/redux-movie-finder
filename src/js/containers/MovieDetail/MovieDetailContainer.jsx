import React from 'react';
import { Route, useParams } from 'react-router';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AppTitle from '../../components/AppTitle';

function MovieDetailContainer(props) {
  const { imdbID } = useParams();
  const { movieDetails } = props;
  // console.log(movieChoices.Search);
  return (
    <Route path={ `/movie/${imdbID}` }>
      {/* TODO: Add go back link */}
      {/* <Link to='/'>Go Back</Link> */}
      <div className='pageContainer flexCol alignCenter p-5'>
        <AppTitle className='appTitle pt-3 pb-3' />
        <div className='detailsContainer alignCenter flexCol p-2'>
          <div className='flexCol alignCenter'>
            <h2 className='mb-3 mt-2 movieDetails fullWidth'>Movie Details</h2>
            <h2>{movieDetails.Title}</h2>
            <div className='m-4 flexRow spaceAround fullWidth greenDeetsContainer'>
              <div className='greenDeets'>{movieDetails.Year}</div>
              <div className='greenDeets'>{movieDetails.Runtime}</div>
              <div className='greenDeets'>{movieDetails.Genre}</div>
            </div>
            <p className='m-3'>{movieDetails.Plot}</p>
            <p className='m-3'>{movieDetails.Awards}</p>
            <div>
              <p>
                Metascore:
                {' '}
                {movieDetails.Metascore}
              </p>
              <p>
                imdb Rating:
                {' '}
                {movieDetails.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Route>
  );
}

MovieDetailContainer.defaultProps = {
  movieDetails: propTypes.objectOf(propTypes.any),
  Title: propTypes.func,
};

MovieDetailContainer.propTypes = {
  movieDetails: propTypes.objectOf(propTypes.any),
  Title: propTypes.func,
};

const mapStoreToProps = (store) => ({
  movieChoices: store.movieChoices,
  movieDetails: store.movieDetails,
});

export default connect(mapStoreToProps, null)(MovieDetailContainer);
