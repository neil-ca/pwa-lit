const express = require('express')

const app = express()

const port = 8081

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.post('/products', (req, res) => {
  res.status(201).json()
})

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports.app = app
