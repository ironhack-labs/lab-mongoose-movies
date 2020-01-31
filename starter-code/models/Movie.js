const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("movie", schema);
