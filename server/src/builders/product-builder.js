module.exports.Builder = {
  product: ({
    name = 'my product',
    description = 'this is a test',
    price = '190',
  } = {}) => ({
    name,
    description,
    price,
  }),
}