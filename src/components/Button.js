import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonPressed = this.handleButtonPressed.bind(this);
  }

  handleButtonPressed() {
    const { onButtonPressed, value } = this.props;
    onButtonPressed(value);
  }

  render() {
    let baseStyle = 'border border-white p-6 h-full w-full cursor-pointer';
    let color = 'bg-light-dark';

    const {
      color: color1, operator, extended, value,
    } = this.props;

    if (extended) baseStyle += ' col-span-2 text-left';

    if (color1 === 'orange') {
      color = 'bg-yellow-500 border-yellow-900';
    } else if (color1 === 'gray') {
      color = 'bg-gray-300 text-black border-gray-500';
    }

    if (value === operator) {
      color = 'bg-white text-yellow-500';
    }

    return (
      <button
        type="button"
        onClick={this.handleButtonPressed}
        className={`${baseStyle} ${color}`}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  onButtonPressed: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  operator: PropTypes.string,
  extended: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  operator: '',
  extended: false,
};

export default Button;
