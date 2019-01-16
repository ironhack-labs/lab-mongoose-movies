const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Celebrity', schema);
