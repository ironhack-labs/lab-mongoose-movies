const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    name: String,
    genre: String,
    plot: String, 
    celebrities: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }]
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);