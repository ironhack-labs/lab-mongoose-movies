const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema(
  {
    name: {type: String, required: true},
    occupation: {type: String},
    catchPhrase: {type: String},
  },
  {
    // add the created and updated date to the schema with timestamps
    timestamps: true,
  }
);

// create the "Celebrity" model for the "celebrities" collecion on mongoDB
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
