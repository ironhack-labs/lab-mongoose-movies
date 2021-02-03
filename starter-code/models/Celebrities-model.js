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

module.exports = model('Celebrity', celebritesSchema);