const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema(
  {
    name: {type: String, require: true},
    occupation: {type: String, require: true},
    catchPhrase: {type: String, require: true},
  }
);

module.exports = model('Celebrity', celebritySchema);