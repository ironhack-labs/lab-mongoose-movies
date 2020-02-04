const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
