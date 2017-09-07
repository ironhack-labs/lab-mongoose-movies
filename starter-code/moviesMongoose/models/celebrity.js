const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  ocupation: String,
  cathPhrase: String,
});
module.exports = mongoose.model('Celebrity', CelebritySchema);
