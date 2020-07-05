const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    // TODO: write the schema
  name: {
      type: String,
      required: true
  },
  ocupation: String,
  catchPhrase: String
  });

  const Celebrity = mongoose.model('Celebrity', celebritySchema);
  
  module.exports = Celebrity;
  