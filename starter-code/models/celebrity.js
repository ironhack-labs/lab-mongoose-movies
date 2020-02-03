const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String },
    occupation: { type: String },
    catchPhrase: { type: String }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("celebrity", schema);
