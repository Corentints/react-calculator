import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { result } = props;
  return (
    <div className="border text-6xl text-right py-2 px-4">{result}</div>
  );
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Result;
