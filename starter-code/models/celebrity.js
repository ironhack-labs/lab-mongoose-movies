const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = Schema({
  name: String,
  occupation: String,
  catchPhrase: String,

});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
