const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    celebrities: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Movie', movieSchema);