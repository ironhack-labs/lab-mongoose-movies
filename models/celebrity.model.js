const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    set: text => text.charAt(0).toUpperCase() + text.substring(1)
  },
  occupation: {
    type: [String]
  },
  catchPhrase: {
    type: String
  }
}, { timestamps: true })

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity