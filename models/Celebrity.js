const mongoose = require("mongoose"); // Erase if already required

const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: String
  },
  upVotes: {
    type: Number,
    default: 0
  },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
