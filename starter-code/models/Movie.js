const { model, Schema } = require("mongoose");

const moviesSchema = new Schema(
  {
    title : String,
    genre: String,
    plot: String
  }
);

module.exports = model("Movie", moviesSchema)