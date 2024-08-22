const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('#SUM', () => {
    it('check sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 2.3), 3);
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });
  });

  describe('#SUBTRACT', () => {
    it('check subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 2.3), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.5), 3);
    });
  });

  describe('#DIVIDE', () => {
    it('check division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIV', 7.4, 2.4), 3.5);
      assert.strictEqual(calculateNumber('DIV', -5.6, 2.1), -3);
    });

    it('check "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIV', 1.4, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIV', 7.0, 0), 'Error');
    });
  });
});
