import React from 'react';
import propTypes from 'prop-types';

export default function AppTitle(props) {
  const { className } = props;

  return (
    <div className={ className }>
      <h1>Movie Finder</h1>
    </div>
  );
}

AppTitle.defaultProps = {
  className: propTypes.string,
};

AppTitle.propTypes = {
  className: propTypes.string,
};
