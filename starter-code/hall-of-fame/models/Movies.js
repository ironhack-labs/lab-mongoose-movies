const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    plot: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
