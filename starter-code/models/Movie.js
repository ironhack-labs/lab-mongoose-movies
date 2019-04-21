const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true
    },
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Movie', movieSchema);
