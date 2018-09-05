const Role = require('../models/role.model')

exports.create = (req, res) => {
  const { title, content } = req.body
  if (!title || !content) return res.status(400).send({ message: 'No role provided' })

  const role = new Role({ title, content })
  role.save()
    .then(result => { res.status(201).send(result) })
    .catch(() => res.status(500).send({ message: 'Unable to save role' }))
}

exports.findAll = (req, res) => {
  Role.find()
    .then(result => { res.status(200).send(result) })
    .catch(error => res.status(500).send({ message: error.message }))
}

exports.findById = (req, res) => {
  const _id = req.params.id
  Role.findOne({ _id })
    .then(result => {
      if (result && result._doc) return res.status(200).send(result)
      res.status(404).send({ message: 'No role found' })
    })
    .catch(error => {
      if (error.kind === 'ObjectId') res.status(500).send({ message: 'No role found' })
      res.status(500).send({ message: error.message })
    })
}

exports.update = (req, res) => {
  const { title, content } = req.body
  if (!title || !content) return res.status(400).send({ message: 'Role content can not be empty' })

  Role.findOneAndUpdate(req.params.id, { title, content }, { new: true })
    .then(result => {
      if (!result) return res.status(404).send({ message: `No role found` })
      res.status(200).send(result)
    })
    .catch(error => {
      if (error.kind === 'ObjectId') return res.status(404).send({ message: 'No role found' })
      return res.status(500).send({ message: error.message })
  })
}

exports.delete = (req, res) => {
  Role.findByIdAndDelete(req.params.id)
    .then(result => {
      if (!result) return res.status(404).send({ message: 'No role found' })
      res.status(200).send({ message: 'Role deleted' })
    })
    .catch(error => {
      if (error.kind === 'ObjectId') return res.status(404).send({ message: 'No role found' })
      return res.status(500).send({ message: error.message })
    })
}
