const mongoose = require('mongoose')
const Schema = mongoose.Schema


const celebSch = new Schema({
  name: String,
  occupation: {
    type: String,
    default: 'unknown'
  },
  catchphrase: String
}, { timestamps: true })


const Celebrity = mongoose.model('Celebrity', celebSch)

module.exports = Celebrity