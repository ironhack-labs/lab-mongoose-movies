const mongoose = require("mongoose");
const { capitalize } = require("../models/schemaFunctions");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true, set: capitalize },
    genre: { type: String, default: undefined, set: capitalize },
    plot: { type: String, default: undefined, set: capitalize }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("movie", schema);
