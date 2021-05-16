const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: String,
    genre: {
        type: String,
        default: 'unknown'
    },
    plot: String
  }
);

module.exports  = model("Movie", movieSchema);
