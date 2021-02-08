const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// CREATE MODEL
//                           Movie -->  movies
const Movie = mongoose.model("Movie", movieSchema);

// EXPORT
module.exports = Movie;