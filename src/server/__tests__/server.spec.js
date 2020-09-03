
it('environment should be test', () => {
  expect(process.env.NODE_ENV).toBe('test');
  expect(process.env.NODE_ENV).not.toBe('dev');
});
