import { greet } from '.';

describe('base-utils', () => {
  it('passes', () => {
    expect(greet('bob')).toBe('Hello bob');
  });
});
