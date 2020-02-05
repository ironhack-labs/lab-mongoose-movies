const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema({
  firstName: String,
  lastName: String,
  occupation: String,
  catchPhrase: String
},
  {
    timestamps: true
  }
);

module.exports = model('Celebrity', celebritySchema);