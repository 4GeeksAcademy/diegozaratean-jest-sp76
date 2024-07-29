const {sum, resta} = require('./sum');

test('sumo 0 y 0 y debe ser 0', () => {
  expect(sum(0, 0)).toBe(0);
});

