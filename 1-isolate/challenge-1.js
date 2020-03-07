const evaluate = require('../evaluate');

const earlyReturn1Tests = [
  { name: 'Test 1', args: ['', ''], expected: 'string' },
  { name: 'Test 2', args: [false, ''], expected: 'hi!' },
  { name: 'Test 3', args: [false, true], expected: 'boolean' },
  { name: 'Test 4', args: ['hi!', true], expected: 'string' },
  { name: 'Test 5', args: [2, 3], expected: 'hi!' },
];

function earlyReturn1(a, b) {
  // write early returns to pass the asserts and the tests
  if (typeof a === 'string' && typeof b === 'boolean') { return typeof a }
  if (typeof a === typeof b && !Number(a)) { return typeof a };
  if (typeof a === 'string') {return 'a should not be a string'};
  if (typeof b === 'boolean') { return 'b should not be a boolean'};

  console.assert(typeof a !== 'string', 'a should not be a string');
  console.assert(typeof b !== 'boolean', 'b should not be a boolean');

  return 'hi!';
}

evaluate(earlyReturn1, earlyReturn1Tests);
