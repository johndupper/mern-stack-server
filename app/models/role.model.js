const mongoose = require('mongoose')

const RoleSchema = mongoose.Schema({
  title: String,
  content: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Role', RoleSchema)
