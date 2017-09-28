const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create celebrity schema
const CelebritySchema = new Schema ({
  name: String,
  occupation: String,
  catchphrase: String
});

// create celebrity model
const Celebrity = mongoose.model('Celebrity', CelebritySchema); // don't fully understand this
module.exports = Celebrity;
