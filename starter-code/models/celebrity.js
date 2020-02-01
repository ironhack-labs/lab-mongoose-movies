const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    cName: String,
    cOccupation: String,
    cCatchPhrase: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("celebrity", schema);