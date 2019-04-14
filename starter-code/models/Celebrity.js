const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Celebrity', new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    default: 'unknown',
  },
  catchPhrase: {
    type: String,
  },
}));