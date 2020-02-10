  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    title: { type: String, unique: true },
    genre: String,
    plot: { type: String}
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", schemaName);
module.exports = Movies;