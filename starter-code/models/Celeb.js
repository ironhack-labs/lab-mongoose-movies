const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebsSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  { versionKey: false, timestamp: true }
)

module.exports = mongoose.model('Celeb', celebsSchema)
