const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CelebritySchema = mongoose.model("celebrities",
  new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
  }))

module.exports = CelebritySchema