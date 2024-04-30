// Write your tests here
const request = require('supertest');
const server = require('./server'); // Import your Express server


test('sanity', () => {
  expect(true).toBe(true)
})




describe('POST /api/auth/register', () => {
  test('responds with 201', () => {
    return request(server)
      .post('/api/auth/register')
      .send({ username: 'thanos', password: 'chicago' }) // Provide username and password
      .expect(201)
  })
  test('responds with 400', () => {
    return request(server)
      .post('/api/auth/register')
      .send({ username: 'thanos' }) // Provide username and password
      .expect(400)
  })
})

describe('POST /api/auth/login', () => {
  test('responds with 200', () => {
    return request(server)
      .post('/api/auth/login')
      .send({ username: 'thanos', password: 'chicago' }) // Provide username and password
      .expect(200)
  })
  test('responds with 400', () => {
    return request(server)
      .post('/api/auth/login')
      .send({ username: 'thanos' }) // Provide username and password
      .expect(400)
  })
})
