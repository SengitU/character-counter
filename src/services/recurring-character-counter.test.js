import { recurringCharacterCounter } from './recurring-character-counter';

describe('Character Counter', () => {

  test('should exists', () => {
    expect(recurringCharacterCounter).not.toBe(undefined);
  });

  test('should not mutate the original word', () => {
    const word = 'aabcde';
    recurringCharacterCounter(word).then(value => {
      expect(word).toBe(word);
    });
  });

  test('should resolve 0 for empty input', () => {
    recurringCharacterCounter().then(value => {
      expect(value).toBe(0)
    });
  });

  test('should resolve 0 for "abcde" input', () => {
    recurringCharacterCounter("abcde").then(value => {
      expect(value).toBe(0)
    });
  });

  test('should resolve 2 for "aabb" input', () => {
    recurringCharacterCounter("aabb").then(value => {
      expect(value).toBe(2)
    });
  });

  test('should resolve 2 for "aaaaaabb" input', () => {
    recurringCharacterCounter("aaaaaabb").then(value => {
      expect(value).toBe(2)
    });
  });

});
