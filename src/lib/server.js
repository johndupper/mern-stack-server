import express from 'express'
import mongoose from 'mongoose'

const app = express()

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter'

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => { console.log('connected to mongoDB') })
  .catch(() => { console.error('unable to connect to mongoDB') })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('*', (request, response) => {
  console.log('returning 404 from the catch-all routes')
  return response.sendStatus(404)
})

export const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })
}

export const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`)
  })
}
