import { calc } from './calculate';

describe('divisions', () => {
  test('1 / 2', () => expect(calc('1 ÷ 2')).toBe('0.5'));
  test('2 / 1', () => expect(calc('2 ÷ 1')).toBe('2'));

  test('3 / 4', () => expect(calc('3 ÷ 4')).toBe('0.75'));
  test('4 / 3', () => expect(calc('4 ÷ 3')).toBe('1.333333'));

  test('15 / 7', () => expect(calc('15 ÷ 7')).toBe('2.142857'));
  test('7 / 15', () => expect(calc('7 ÷ 15')).toBe('0.4666667'));

  test('812547 / 4582', () => expect(calc('812547 ÷ 4582')).toBe('177.3346'));
  test('4582 / 812547', () => expect(calc('4582 ÷ 812547')).toBe('0.005639058'));

  test('1.23456 / 7.89101112', () => expect(calc('1.23456 ÷ 7.89101112')).toBe('0.1564514'));
  test('7.89101112 / 1.23456', () => expect(calc('7.89101112 ÷ 1.23456')).toBe('6.39176'));

  test('5 / 0', () => expect(calc('5 ÷ 0')).toBe('Error'));
});
