const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebrity_schema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})

module.exports = mongoose.model("Celebrity", celebrity_schema)