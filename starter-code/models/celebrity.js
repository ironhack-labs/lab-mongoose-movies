const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    // todo: case sensitive?
  },
  occupation: {
    type: String,
    default: "unknown"
  },
  catchphrase: String
});

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;
