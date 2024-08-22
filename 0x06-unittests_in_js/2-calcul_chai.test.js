/* eslint-disable jest/valid-expect */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  describe('#SUM', () => {
    it('check sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 2.3)).to.equal(3);
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });
  });

  describe('#SUBTRACT', () => {
    it('check subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.2, 2.3)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 5.5, 2.5)).to.equal(3);
    });
  });

  describe('#DIVIDE', () => {
    it('check division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 7.4, 2.4)).to.equal(3.5);
      expect(calculateNumber('DIVIDE', -5.6, 2.1)).to.equal(-3);
    });

    it('check "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 7.0, 0)).to.equal('Error');
    });
  });
});
