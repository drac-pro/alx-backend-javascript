const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checking_result_is_round', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('checking_result_is_round', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('checking_result_is_round', () => {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('checking_result_is_round', () => {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });

  it('checking_result_is_round', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
