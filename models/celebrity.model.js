const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
    type: String,
    required: 'Name is required',
      unique: true
  },
  occupation: {
    type: String,
    default: 'unknown',
  },
  catchPhrase: {
    type: String
  }
})

const Celebrity = mongoose.model("Celebrity", movieSchema);
module.exports = Celebrity;