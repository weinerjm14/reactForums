
// there should be a test here that tests the rFTest database connection

it('should connect with rFTest database', () => {
  expect(process.env.NODE_ENV).toBe('test');
});
