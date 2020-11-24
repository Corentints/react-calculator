import { calc } from './calculate';

// inspired by the cases stated by Mozilla for their calculator
// available here: https://mozilla.github.io/calculator/test/

describe('divisions', () => {
  test('two positives int', () => {
    expect(calc('1 ÷ 2')).toBe('0.5');
  });

  test('0 by int', () => {
    expect(calc('0 ÷ 2')).toBe('0');
  });

  test('negative int by positive int', () => {
    expect(calc('-42 ÷ 22')).toBe('-1.909091');
  });

  test('negative float by negative float', () => {
    expect(calc('-0.42 ÷ 22.42')).toBe('-0.01873327');
  });

  test('negative int by positive float', () => {
    expect(calc('-5 ÷ 22.42')).toBe('-0.2230152');
  });

  test('float by int', () => {
    expect(calc('6.12 ÷ 2')).toBe('3.06');
  });

  test('float by float', () => {
    expect(calc('6.12 ÷ 12.6')).toBe('0.4857143');
  });

  test('error if divided by 0', () => {
    expect(calc('500 ÷ 0')).toBe('Error');
  });
});
