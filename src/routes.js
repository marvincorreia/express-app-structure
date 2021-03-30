const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
});

routes.get('/api/routes', (req, res) => {
  return res.json(['/', '/api/routes'])
});

module.exports = routes