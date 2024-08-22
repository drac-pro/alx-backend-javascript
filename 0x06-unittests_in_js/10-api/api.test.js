const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('index Page', () => {
  const serverUrl = 'http://localhost:7865';

  it('check correct status code', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  }));

  it('check correct result', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  }));

  it('check correct Content-Type', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /html/);
        done();
      });
  }));
});

describe('cart Page', () => {
  const serverUrl = 'http://localhost:7865';

  it('check correct status code when :id is a number', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  }));

  it('check 404 status code when :id is NOT a number', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  }));
});

describe('available_payments Page', () => {
  const serverUrl = 'http://localhost:7865';

  it('check correct payment methods', () => new Promise((done) => {
    chai.request(serverUrl)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
        done();
      });
  }));
});

describe('login Page', () => {
  const serverUrl = 'http://localhost:7865';

  it('check correct login welcome message', () => new Promise((done) => {
    chai.request(serverUrl)
      .post('/login')
      .send({ userName: 'Alice' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome Alice');
        done();
      });
  }));
});
