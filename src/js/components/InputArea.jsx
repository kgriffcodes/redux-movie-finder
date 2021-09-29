import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchMovie } from '../actions/actions';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick() {
    console.log(this.state.searchTerm);
    const searchTerm = this.state.searchTerm;
    const searchShortCode = searchTerm.replace(' ', '+');
    this.props.handleClick(searchShortCode);
  }

  render() {
    return (
      <div className={ `${this.props.className} inputArea` }>
        <input name='searchTerm' type='search' onChange={ this.handleChange } />
        <button type='submit' onClick={ this.handleClick }>Go!</button>
      </div>
    );
  }
}

InputArea.propTypes = {
  className: propTypes.string,
};

const mapDispatchToProps = dispatch => ({
  handleClick: (searchShortCode) => {
    dispatch(fetchMovie(searchShortCode));
  }
});

export default connect(null, mapDispatchToProps)(InputArea);
