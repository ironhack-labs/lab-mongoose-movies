const mongoose = require('mongoose')
require('./Movie.model')

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})

celebritySchema.virtual('movies', {
  ref: 'Movie',
  foreignField: 'stars',
  localField: 'name'
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity
