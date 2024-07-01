const request = require('supertest')

const { app } = require('../src/server')

const { Builder } = require('../src/builders/product-builder')

describe('POST /products', () => {
  test('should store a new product', async () => {
    const product = Builder.product()

    const response = await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toEqual({
      ...product,
      _id: 'abc',
    })
  })
})
