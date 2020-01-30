const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  plot: String
});

module.exports = mongoose.model("Movie", schema);
