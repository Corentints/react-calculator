import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class CalculatorButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonPressed = this.handleButtonPressed.bind(this);
  }

  handleButtonPressed(value) {
    const { onButtonPressed } = this.props;
    onButtonPressed(value);
  }

  render() {
    const { operator } = this.props;
    return (
      <div className="grid grid-cols-4 items-center gap-4 text-2xl mt-6 text-center">
        <Button onButtonPressed={this.handleButtonPressed} value="AC" color="gray" />
        <Button onButtonPressed={this.handleButtonPressed} value="+/-" color="gray" />
        <Button onButtonPressed={this.handleButtonPressed} value="%" color="gray" />
        <Button
          onButtonPressed={this.handleButtonPressed}
          value="÷"
          color="orange"
          operator={operator}
        />

        <Button onButtonPressed={this.handleButtonPressed} value="7" />
        <Button onButtonPressed={this.handleButtonPressed} value="8" />
        <Button onButtonPressed={this.handleButtonPressed} value="9" />
        <Button
          onButtonPressed={this.handleButtonPressed}
          value="x"
          color="orange"
          operator={operator}
        />

        <Button onButtonPressed={this.handleButtonPressed} value="4" />
        <Button onButtonPressed={this.handleButtonPressed} value="5" />
        <Button onButtonPressed={this.handleButtonPressed} value="6" />
        <Button
          onButtonPressed={this.handleButtonPressed}
          value="-"
          color="orange"
          operator={operator}
        />

        <Button onButtonPressed={this.handleButtonPressed} value="1" />
        <Button onButtonPressed={this.handleButtonPressed} value="2" />
        <Button onButtonPressed={this.handleButtonPressed} value="3" />
        <Button
          onButtonPressed={this.handleButtonPressed}
          value="+"
          color="orange"
          operator={operator}
        />

        <Button onButtonPressed={this.handleButtonPressed} value="0" extended />
        <Button onButtonPressed={this.handleButtonPressed} value="." />
        <Button onButtonPressed={this.handleButtonPressed} value="=" color="orange" />
      </div>
    );
  }
}

CalculatorButtons.propTypes = {
  onButtonPressed: PropTypes.func.isRequired,
  operator: PropTypes.string,
};

CalculatorButtons.defaultProps = {
  operator: '',
};

export default CalculatorButtons;
