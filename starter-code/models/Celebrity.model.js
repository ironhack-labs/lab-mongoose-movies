const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
  },
  {
    timestamps: true
  }
);

module.exports = model('Celebrity', celebritySchema);