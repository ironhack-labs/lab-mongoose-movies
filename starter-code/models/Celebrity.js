// models/celebrity

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String   
  },
);

// CREATE MODEL celebriity, it is going to be celebrities en monogdb
const Celebrity = mongoose.model('Celebrity', celebritySchema);

// EXPORT
module.exports = Celebrity;
