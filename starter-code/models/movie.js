const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Movie", schema);
