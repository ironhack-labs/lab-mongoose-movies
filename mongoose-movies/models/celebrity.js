const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Create the Celebrity model with the schema
const celebritySchema = new Schema ({
  name:        String,
  occupation:  String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;