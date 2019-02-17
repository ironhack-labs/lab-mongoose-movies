const mongoose = require('mongoose');

const { Schema } = mongoose;

const mySchema = new Schema({
  name: String,
  ocupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', mySchema);

module.exports = Celebrity;
