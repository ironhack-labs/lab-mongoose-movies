const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Celebrity', celebritySchema);