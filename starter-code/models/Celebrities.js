const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const celebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})

const Celebrities = mongoose.model("Celebrities", celebritiesSchema)
module.exports = Celebrities
