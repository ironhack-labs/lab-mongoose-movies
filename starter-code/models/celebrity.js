const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("celebrity", schema);