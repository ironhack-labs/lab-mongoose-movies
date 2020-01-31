const mongoose = require("mongoose");
const { capitalize } = require("../models/schemaFunctions");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, set: capitalize },
    occupation: { type: String, default: undefined, set: capitalize },
    catchPhrase: { type: String, default: undefined, set: capitalize }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("celebrity", schema);
