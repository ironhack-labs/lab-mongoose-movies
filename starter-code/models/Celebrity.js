const mongoose = require('mongoose');

const { Schema } = mongoose;

const celetritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celetritySchema);

module.exports = Celebrity;
