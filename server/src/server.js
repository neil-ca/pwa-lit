const { app } = require('./app')

const port = 8080

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports.app = app
