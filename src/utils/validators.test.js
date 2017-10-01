import { alphaNumeric } from './validators';

describe('alphaNumeric', () => {

  test('should exists', () => {
    expect(alphaNumeric).not.toBe(undefined);
  });

  test('should not mutate the original value', () => {
    const value = 'aabcde';
    alphaNumeric(value);
    expect(value).toBe(value);
  });

  test('should return true for false for undefined', () => {
    expect(alphaNumeric()).toBe(false);
  });

  test('should return true for ""', () => {
    expect(alphaNumeric("")).toBe(true);
  });

  test('should return true for "abcde1234"', () => {
    expect(alphaNumeric("abcde1234")).toBe(true);
  });

});
