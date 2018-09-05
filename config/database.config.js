const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/dev-match'

module.exports = { url: MONGO_URL }
