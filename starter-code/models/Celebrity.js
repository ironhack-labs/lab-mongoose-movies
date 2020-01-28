const mongoose = require("mongoose");

const Celebrity = new mongoose.Schema(
  {
    name: String,
    occupation: { type: String, default: "unknown" },
    catchPhrase : String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("celebrity", Celebrity);