import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { result } = props;
  return (
    <div className="px-4 py-2 text-4xl text-right border md:text-6xl">{result}</div>
  );
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Result;
