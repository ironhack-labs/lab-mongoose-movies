const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPharse: String,
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;