const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  // The reference to the Publisher model
  // _publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' }
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;