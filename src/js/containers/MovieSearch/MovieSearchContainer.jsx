import React from 'react';
import AppTitle from '../../components/AppTitle';
import InputArea from '../../components/InputArea';
import MovieCard from '../../components/MovieCard';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='p-5'>
        <AppTitle className='pb-3' />
        <InputArea className='mb-3' />
        <MovieCard />
      </div>
    );
  }
}

export default MovieSearchContainer;
