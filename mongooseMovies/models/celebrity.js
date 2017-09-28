const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name : { type: String, required: [true, 'Please enter the name'] },
  occupation : { type: String, required: [true, 'Please enter the occupation'] },
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;