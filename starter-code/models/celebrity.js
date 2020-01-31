const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    occupation: String,
    catchPhrase: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Celebrity", schema);
