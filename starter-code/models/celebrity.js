const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

//Define the model of the schema
const Celebrity = mongoose.model("Celebrity", celebritySchema);

//Export the model
module.exports = Celebrity;