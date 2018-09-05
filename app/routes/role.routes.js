module.exports = app => {
  const roles = require('../controllers/role.controller.js')
  app.post('/roles', roles.create)
  app.get('/roles', roles.findAll)
  app.get('/roles/:id', roles.findById)
  app.put('/roles', roles.update)
  app.delete('/roles/:id', roles.delete)
}
