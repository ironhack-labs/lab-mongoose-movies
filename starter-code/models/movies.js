const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  // name: type,
  title: String,
  genre: String,
  plot: String,
  cast: [{ type: Schema.Types.ObjectId, ref: "celebrities" }],
});

module.exports = model("movies", movieSchema);
