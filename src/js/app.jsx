import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import MovieSearchContainer from './containers/MovieSearch/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetail/MovieDetailContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:imdbID' component={ MovieDetailContainer } />
        </div>
      </Router>
    );
  }
}
