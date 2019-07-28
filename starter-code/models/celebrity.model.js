const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celbSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
},{timestamps: true})

const Celebrity = mongoose.model("Celebrity", celbSchema)

module.exports = Celebrity