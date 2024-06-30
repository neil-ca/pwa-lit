const express = require('express')

const app = express()

const port = 8081

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/products', (req, res) => {
  const { name, description, price } = req.body
  const _id = 'abc'

  res.status(201).json({
    name,
    description,
    price,
    _id,
  })
})

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports.app = app
