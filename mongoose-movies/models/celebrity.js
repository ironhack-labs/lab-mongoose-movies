const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Create the Celebrity model with the schema
const celebritySchema = new Schema ({
  name:        String,
  occupation:  String,
  catchPhrase: String
});

const celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = celebrity;