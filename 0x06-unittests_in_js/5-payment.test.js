const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('check sendPaymentRequestToApi prints 120', () => {
    calculateNumberStub.returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1);
  });

  it('check sendPaymentRequestToApi prints 20', () => {
    calculateNumberStub.returns(20);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1);
  });
});
