import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import MoreInfoBtn from './MoreInfoBtn';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('more info!');
  }

  render() {
    return (
      <div className='movieCard flexRow p-4 mt-5'>
        <div>
          {/* <img alt='movie poster' src={ props.movieChoices.Poster } /> */}
        </div>
        <div>
          <div>{this.props.title}</div>
          <div>{this.props.year}</div>
          {/* <div>{props.movieChoices.Plot}</div> */}
        </div>
        <MoreInfoBtn onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: propTypes.string,
  year: propTypes.string,
};

// MovieCard.propTypes = {
//   movieChoices: propTypes.shape({
//     Title: propTypes.string,
//     Year: propTypes.string,
//     Rated: propTypes.string,
//     Released: propTypes.string,
//     Runtime: propTypes.string,
//     Genre: propTypes.string,
//     Director: propTypes.string,
//     Writer: propTypes.string,
//     Actors: propTypes.string,
//     Plot: propTypes.string,
//     Language: propTypes.string,
//     Country: propTypes.string,
//     Awards: propTypes.string,
//     Poster: propTypes.string,
//     Ratings: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
//     Metascore: propTypes.string,
//     imdbRating: propTypes.string,
//     imdbVotes: propTypes.string,
//     imdbID: propTypes.string,
//     Type: propTypes.string,
//     DVD: propTypes.string,
//     BoxOffice: propTypes.string,
//     Production: propTypes.string,
//     Website: propTypes.string,
//     Response: propTypes.string,
//   })
// };

const mapStoreToProps = store => ({
  movieChoices: store.movieChoices,
});

export default connect(mapStoreToProps, null)(MovieCard);

