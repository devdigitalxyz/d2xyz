import { test, expect } from '@playwright/test';
import { stringCapitalize } from '.';

test.describe('stringCapitalize()', () => {
  test('should capitalize the first letter of a string', () => {
    expect(stringCapitalize('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of all strings', () => {
    expect(stringCapitalize('hello world', true)).toBe('Hello World');
  });
});
