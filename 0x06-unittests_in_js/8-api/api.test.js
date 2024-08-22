const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('index Page', () => {
  const serverUrl = 'http://localhost:7865';

  it('should return the correct status code', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  }));

  it('should return the correct result', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  }));

  it('should have the correct Content-Type', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /html/);
        done();
      });
  }));
});
