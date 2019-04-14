const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true },
  occupation: { type: String },
  catchPhrase: { type: String }
});

const Celebrity = mongoose.model('Celebrity', schema);

module.exports = Celebrity;