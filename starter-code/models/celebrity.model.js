const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
    required: true,
    enum: ['actor/actress', 'singer', 'comedian', 'athlete', 'others']
  },
  catchPhrase: {
    type: String,
    required: true
  }
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;