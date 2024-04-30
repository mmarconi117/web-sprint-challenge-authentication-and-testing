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
      .send({ username: 'mike', password: 'chicago' }) // Provide username and password
      .expect(201)
  })
})
