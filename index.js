require('dotenv').config()
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const express = require('express')
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config')

// api
const app = express()
app.use(express.json(), express.urlencoded({ extended: true }))
app.listen(3000, () => console.log(`API listening on port: ${PORT}`))

// db
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected at url: ${MONGO_URL}`))
  .catch((e) => {
    console.error(e.message)
    process.exit(500)
  })

// routes
require('./app/routes/role.routes')(app)
