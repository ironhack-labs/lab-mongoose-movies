const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: String,
    occupation: String,
    cachPhrase: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("celebrity", schema);