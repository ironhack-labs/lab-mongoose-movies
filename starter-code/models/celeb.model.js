const mongoose = require('mongoose')
const Schema = mongoose.Schema


const celebSch = new Schema({
  name: String,
  occupation: String,
  catchphrase: String
}, { timestamps: true })


const Celebrity = mongoose.model('Celebrity', celebSch)

module.exports = Celebrity