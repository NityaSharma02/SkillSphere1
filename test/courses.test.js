const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Courses API', () => {
  it('GET /api/courses', done => {
    chai.request(app)
      .get('/api/courses')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('POST /api/courses', done => {
    chai.request(app)
      .post('/api/courses')
      .send({ name: 'Python' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
