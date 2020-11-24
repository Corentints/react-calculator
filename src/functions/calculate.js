/*
 * Format number with precision of 7 numbers
 */
function formatNumber(number) {
  return parseFloat((number).toPrecision(7)).toString();
}

/**
 *  Reset the state
 * @returns {{result: '0', lastValue: null, operator: null}}
 */
function resetObj() {
  return {
    result: '0',
    lastValue: null,
    operator: null,
  };
}

/**
 *  Change the result (if no operator ) / lastValue (if operator) sign
 * @param state
 * @returns {{operator}|*}
 */
function reverseSign(state) {
  const obj = state;
  if (!obj.operator) {
    obj.result = formatNumber(-obj.result);
  } else {
    obj.lastValue = formatNumber(-obj.lastValue);
  }
  return obj;
}

/**
 * Calculate result and lastValue by the operator
 * @param state
 * @returns {*}
 */
function calc(state) {
  const obj = state;
  const result = parseFloat(obj.result);
  const lastValue = parseFloat(obj.lastValue);

  switch (obj.operator) {
    case '÷':
      obj.result = lastValue === 0 ? 0 : result / lastValue;
      break;
    case 'x':
      obj.result = result * lastValue;
      break;
    case '+':
      obj.result = result + lastValue;
      break;
    case '-':
      obj.result = result - lastValue;
      break;
    default:
      break;
  }

  obj.result = formatNumber(obj.result);
  obj.lastValue = null;
  obj.operator = null;
  return obj;
}

export default function calculate(state, value) {
  const obj = state;

  if (value === 'AC') {
    if (!obj.operator) {
      return resetObj();
    }
    obj.lastValue = '0';
    return obj;
  }

  if (value === '+/-') {
    return reverseSign(obj);
  }

  if (value === '%') {
    if (!obj.operator) {
      obj.result = formatNumber(obj.result / 100);
    } else {
      obj.lastValue = formatNumber(obj.lastValue / 100);
    }
    return obj;
  }

  if (value === '.') {
    if (obj.lastValue !== null) {
      obj.lastValue += obj.lastValue.includes('.') ? '' : '.';
    } else {
      obj.result += obj.result.includes('.') ? '' : '.';
    }
    return obj;
  }

  if (!Number.isNaN(parseFloat(value))) {
    if (!obj.operator) { // no operator entered, so we modify the result
      if (obj.result === '0') {
        obj.result = value;
      } else {
        obj.result += value;
      }
    } else if (obj.lastValue === '0' || obj.lastValue === null) {
      obj.lastValue = value;
    } else {
      obj.lastValue += value;
    }
    return obj;
  }

  if (value === '=') {
    if (obj.lastValue !== null && obj.result !== null) {
      return calc(obj);
    }
    return obj;
  }

  obj.operator = value;

  return obj;
}
