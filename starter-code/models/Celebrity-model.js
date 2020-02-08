const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema (
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    //Keep record of when is created and updated
    timestamps: true
  }
);

module.exports = mongoose.model('Celebrity', celebritySchema);