const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema({
  name: 'String',
  ocupation: 'String',
  catchPhrase: 'String'
}, {
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model('Celebrity', celebritySchema)