const request = require('supertest')

const { app } = require('../src/server')

describe('POST /products', () => {
  test('should store a new product', async () => {
    await request(app)
      .post('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
  })
})
