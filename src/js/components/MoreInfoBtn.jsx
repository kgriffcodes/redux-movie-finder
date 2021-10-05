import React from 'react';
import propTypes from 'prop-types';

export default function MoreInfoBtn(props) {
  const { onClick } = props;

  return (
    <div>
      <button type='button' onClick={ onClick }>More Information</button>
    </div>
  );
}

MoreInfoBtn.defaultProps = {
  onClick: propTypes.func,
};

MoreInfoBtn.propTypes = {
  onClick: propTypes.func,
};
