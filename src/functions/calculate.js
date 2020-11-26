/**
 * Remove "-" and "." from number to get real length
 * -8.15 => 815
 * @param number
 * @returns {string}
 */
function numLength(number) {
  if (number) {
    return number.toString().replace('-', '').replace('.', '').length;
  }
  return '0';
}

/**
 * @param number
 * @returns {string} Format number with precision of 9 numbers
 */
function formatNumber(number) {
  let numberFormatted = parseFloat((number).toPrecision(9));
  // if the number length > 9 (without sign and .), reformat it to scientific notation
  if (numLength(numberFormatted) > 9) {
    numberFormatted = parseFloat((number).toPrecision(6)).toExponential()
      .replace('e+0', ''); // if e+0, remove it (useless)
  }
  return numberFormatted.toString();
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

/*
 * return the result of a OPERATOR b (with precision of 7 numbers)
 */
export function calc(calculation) {
  const splittedCalc = calculation.split(' ');
  const a = parseFloat(splittedCalc[0]);
  const operator = splittedCalc[1];
  const b = parseFloat(splittedCalc[2]);
  let result;

  switch (operator) {
    case '÷':
      result = b === 0 ? 'Error' : a / b;
      break;
    case 'x':
      result = a * b;
      break;
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = 0;
      break;
  }
  return result === 'Error' ? 'Error' : formatNumber(result);
}

export function calculate(state, value) {
  const obj = state;
  obj.result = obj.result.replace('Error', '0');

  if (value === 'AC') {
    if (!obj.operator || obj.operator === '=') {
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
    if ((numLength(obj.result) >= 9 && !obj.operator) || numLength(obj.lastValue) >= 9) {
      return obj;
    }

    if ((!obj.operator && obj.result === '0') || obj.operator === '=') {
      obj.result = value;
      obj.operator = null;
    } else if (!obj.operator) {
      obj.result += value;
    } else if (obj.lastValue === '0' || obj.lastValue === null) {
      obj.lastValue = value;
    } else {
      obj.lastValue += value;
    }
    return obj;
  }

  if (value === '=') {
    if (obj.lastValue !== null && obj.result !== null) {
      obj.result = calc(`${obj.result} ${obj.operator} ${obj.lastValue}`).toString();
      obj.lastValue = null;
      obj.operator = '=';
    }
    return obj;
  }

  obj.operator = value;

  return obj;
}
