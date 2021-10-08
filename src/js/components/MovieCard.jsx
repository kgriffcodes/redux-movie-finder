import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import MoreInfoBtn from './MoreInfoBtn';
import { fetchMovieDetails } from '../actions/actions';

function MovieCard(props) {
  // const history = useHistory();

  const {
    title,
    year,
    imdbID,
    handleClick,
  } = props;

  // const handleClick = () => {
  //   this.props.handleClick(imdbID);
  // };

  return (
    <div className='movieCard flexRow p-4 mt-5'>
      <div>
        {/* <img alt='movie poster' src={ props.movieChoices.Poster } /> */}
      </div>
      <div>
        <div>{title}</div>
        <div>{year}</div>
        {/* <div>{props.movieChoices.Plot}</div> */}
      </div>
      <Link to={ `/movie/${imdbID}` }>
        <MoreInfoBtn onClick={ () => handleClick(imdbID) } />
      </Link>
    </div>
  );
}

MovieCard.defaultProps = {
  title: propTypes.string,
  year: propTypes.string,
  imdbID: propTypes.string,
  handleClick: propTypes.func,
};

MovieCard.propTypes = {
  title: propTypes.string,
  year: propTypes.string,
  imdbID: propTypes.string,
  handleClick: propTypes.func,
};

const mapStoreToProps = (store) => ({
  movieChoices: store.movieChoices,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (imdbID) => {
    dispatch(fetchMovieDetails(imdbID));
  }
});

export default connect(mapStoreToProps, mapDispatchToProps)(MovieCard);
