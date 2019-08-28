const mongoose = require("mongoose");

const { Schema } = mongoose;

const moviesSchema = new Schema(
  {
    title: { type: String, riquired: true },
    genre: String,
    plot: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
