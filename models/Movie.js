const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  name: String,
  genre: {
    type: String,
    enum: ["drama", "action/adventure", "comedy", "romance", "other"],
  },
  plot: String,
});

module.exports = model("Movie", movieSchema);
