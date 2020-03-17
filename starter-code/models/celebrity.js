const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  occupation: {
    type: String, 
    required: true
  },

  catchPhrase: {
    type: String, 
    unique: true,
    required: true
  }

});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;