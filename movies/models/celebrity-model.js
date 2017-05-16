const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: [true, "Add Celebrity Name"],
    maxLength: 40
  },
  occupation: {
    type: String,
    required: [true, "Add Occupation for this Celebrity"],
    maxLength: 40
  },
  catchPhrase: {
    type: String,
    required: [true, "Add a Catchphrase for this Celebrity"],
    maxLength:40
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
