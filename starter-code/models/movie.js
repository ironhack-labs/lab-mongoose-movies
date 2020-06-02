const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{
      type: Schema.Types.ObjectId,
      ref: 'Celebrity'
    }]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;