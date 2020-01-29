const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
      name: String,
      ocuppation: String,
      catchPhrase: { type: Boolean, default: false }
    },
    {
      timestamps: true
    }
  );
  module.exports = mongoose.model("celebrity", schema);
  