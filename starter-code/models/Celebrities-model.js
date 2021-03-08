const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritiesSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

const Celebrity = model('Celebrity', celebritiesSchema);

module.exports = Celebrity;