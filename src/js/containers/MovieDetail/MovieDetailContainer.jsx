import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

function MovieDetailContainer(props) {
  const { movie, imdbID } = props;
  const shortName = movie.replace(/ /g, '+');
  return (
    <Route path={ `/${shortName}/${imdbID}` }>
      <div>
        <h1>Movie Detail Container</h1>

        {/* <p>Viewing movie {this.props.match.params.id}</p> */}
        <p>
          Viewing movie
          {imdbID}
        </p>
      </div>
    </Route>
  );
}

MovieDetailContainer.defaultProps = {
  movie: propTypes.string,
  imdbID: propTypes.string,
};

MovieDetailContainer.propTypes = {
  movie: propTypes.string,
  imdbID: propTypes.string,
};

const mapStoreToProps = (store) => ({
  movieChoices: store.movieChoices,
});

export default connect(mapStoreToProps, null)(MovieDetailContainer);
