import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import MoreInfoBtn from './MoreInfoBtn';

function MovieCard(props) {
  // const history = useHistory();

  const { title, year, imdbID } = props;

  const shortName = title.toLowerCase().replace(/ /g, '+');

  // const handleClick = () => {
    // history.push(`/${shortName}/${props.imdbID}`);
    // console.log('history: ', history);
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
      <Link to={ `/${shortName}/${imdbID}` }>
        <MoreInfoBtn />
      </Link>
    </div>
  );
}

MovieCard.defaultProps = {
  title: propTypes.string,
  year: propTypes.string,
  imdbID: propTypes.string,
};

MovieCard.propTypes = {
  title: propTypes.string,
  year: propTypes.string,
  imdbID: propTypes.string,
};

const mapStoreToProps = (store) => ({
  movieChoices: store.movieChoices,
});

export default connect(mapStoreToProps, null)(MovieCard);
