const request = require('supertest')

const { app } = require('../src/server')
const { Builder } = require('../src/builders/product-builder')
const { store } = require('../src/services/product-service')

jest.mock('../src/services/product-service')

beforeEach(() => {
  store.mockReset()
})

describe('POST /products', () => {
  test('should store a new product', async () => {})

  test('should execute store function', async () => {
    const product = Builder.product()

    const response = await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(store).toHaveBeenCalled()
  })
})
