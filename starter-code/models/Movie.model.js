const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Movie', movieSchema);