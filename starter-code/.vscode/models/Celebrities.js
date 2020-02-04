const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authorSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  });

  module.exports = model('Celebrities', celebritiesSchema);