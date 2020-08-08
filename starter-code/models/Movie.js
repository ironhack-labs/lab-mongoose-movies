const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const MovieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", MovieSchema);
