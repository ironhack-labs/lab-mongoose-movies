const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema  = new Schema({
  name:{type: String},
  occupation:{type: String},
  catchPhrase:{type: String}
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
