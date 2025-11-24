const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('Users API Integration', () => {

  it('GET /api/users → should return all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.above(0);
  });

  it('GET /api/users/:id → should return a user by ID', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });

  it('POST /api/users → should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Charlie' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('name', 'Charlie');
  });

  it('POST /api/users → should fail without name', async () => {
    const res = await request(app).post('/api/users').send({});
    expect(res.status).to.equal(400);
  });

});
