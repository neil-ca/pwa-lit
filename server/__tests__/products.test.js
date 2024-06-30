const request = require('supertest')

const { app } = require('../src/server')

describe('POST /products', () => {
  test('should store a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'my product',
        description: 'this is a test',
        price: '190',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toEqual({
      name: 'my product',
      description: 'this is a test',
      price: '190',
      _id: 'abc',
    })
  })
})
