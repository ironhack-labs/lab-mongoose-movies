const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    occupation: String,
    catchPrase: String
  }
  // {
  //   timestamps: true
  // }
);

module.exports = mongoose.model("celebrity", schema);
