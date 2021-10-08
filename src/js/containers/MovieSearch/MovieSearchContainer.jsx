import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import AppTitle from '../../components/AppTitle';
import InputArea from '../../components/InputArea';
import MovieCard from '../../components/MovieCard';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieChoices } = this.props;
    return (
      <div className='pageContainer p-5'>
        <AppTitle className='pb-3 pt-3 appTitle' />
        <InputArea className='mb-3' />
        {movieChoices.Search
          ? Array.from(movieChoices.Search).map((movieChoice) => (
            <MovieCard
              key={ movieChoice.imdbID }
              title={ movieChoice.Title }
              year={ movieChoice.Year }
              poster={ movieChoice.Poster }
              imdbID={ movieChoice.imdbID }
            />
          )) : null}
      </div>
    );
  }
}

// const movieChoicesShape = propTypes.shape({
//   Title: propTypes.string,
//   Year: propTypes.string,
//   Rated: propTypes.string,
//   Released: propTypes.string,
//   Runtime: propTypes.string,
//   Genre: propTypes.string,
//   Director: propTypes.string,
//   Writer: propTypes.string,
//   Actors: propTypes.string,
//   Plot: propTypes.string,
//   Language: propTypes.string,
//   Country: propTypes.string,
//   Awards: propTypes.string,
//   Poster: propTypes.string,
//   Ratings: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
//   Metascore: propTypes.string,
//   imdbRating: propTypes.string,
//   imdbVotes: propTypes.string,
//   imdbID: propTypes.string,
//   Type: propTypes.string,
//   DVD: propTypes.string,
//   BoxOffice: propTypes.string,
//   Production: propTypes.string,
//   Website: propTypes.string,
//   Response: propTypes.string,
// });

MovieSearchContainer.propType = {
  movieChoices: propTypes.objectOf(propTypes.objectOf(propTypes.string)),
  Search: propTypes.objectOf(propTypes.objectOf(propTypes.string)),
};

const mapStoreToProps = store => ({
  movieChoices: store.movieChoices
});

export default connect(mapStoreToProps)(MovieSearchContainer);
