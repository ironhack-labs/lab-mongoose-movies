const { Schema, model } = require('mongoose');

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = model('Celebrity', celebSchema,'celebrities');

module.exports = Celebrity;
