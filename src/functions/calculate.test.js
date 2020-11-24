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

describe('multiplications', () => {
  test('two positives int', () => {
    expect(calc('5 x 5')).toBe('25');
  });

  test('float by int', () => {
    expect(calc('87.5897 x 75')).toBe('6569.227');
  });

  test('float by float', () => {
    expect(calc('75.8442 x 87.5897')).toBe('6643.171');
  });

  test('int by 0', () => {
    expect(calc('2 x 0')).toBe('0');
  });

  test('negative by positive', () => {
    expect(calc('-3 x 2')).toBe('-6');
  });

  test('negative float by positive', () => {
    expect(calc('-3.54 x 582')).toBe('-2060.28');
  });

  test('negative by positive float', () => {
    expect(calc('-578 x 789.541')).toBe('-456354.7');
  });
});
