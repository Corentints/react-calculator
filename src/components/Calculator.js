import React from 'react';
import CalculatorButtons from './CalculatorButtons';
import Result from './Result';
import calculate from '../functions/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
      lastValue: null,
      operator: null,
    };
    this.handleButtonPressed = this.handleButtonPressed.bind(this);
  }

  handleButtonPressed(value) {
    const { state } = this;
    this.setState(calculate(state, value));
  }

  render() {
    const { operator } = this.state;
    const { result, lastValue } = this.state;
    return (
      <div className="w-full px-8 md:w-8/12 lg:w-6/12 xl:w-4/12 my-12 h-full m-auto text-white">
        <Result result={lastValue || result} />
        <CalculatorButtons onButtonPressed={this.handleButtonPressed} operator={operator} />
      </div>
    );
  }
}

export default Calculator;
