const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const celebrities = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrities = mongoose.model("Celebrities", celebrities);

module.exports = Celebrities