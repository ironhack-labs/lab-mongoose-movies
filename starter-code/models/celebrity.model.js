const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: String,
});

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;
