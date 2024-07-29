const {sum, resta} = require('./sum');

test('sumo 2 y 2 y debe ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('sumo 5 y 0 y debe ser 5', () => {
    expect(sum(5, 0)).toBe(5);
  });

test('sumo 3 y 4 y debe ser 7', () => {
    expect(sum(3, 4)).toBe(7);
  });

test('sumo 8 y 2 y debe ser 10', () => {
    expect(sum(8, 2)).toBe(10);
  });

