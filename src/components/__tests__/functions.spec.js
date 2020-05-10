import { add, subtract } from '../utils/functions';

test('adds', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(5, 5)).toEqual(10);
});

test('subtracts', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 10)).toEqual(0);
  expect(subtract(7, 2)).toBe(5);
});
