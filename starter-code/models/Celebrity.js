const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model({
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
});