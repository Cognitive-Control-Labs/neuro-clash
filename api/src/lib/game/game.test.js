import game from './game';

test('Expect boum to be pow', () => {
  const a = game('boum');
  expect(a).toBe('pow');
});

test('Expect bad input to be empty string', () => {
  const a = game('wha wha whe wha');
  expect(a).toBe('');
});