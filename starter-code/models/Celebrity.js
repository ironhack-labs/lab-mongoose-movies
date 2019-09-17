const mongoose = require('mongoose');
const Schema = mongoose.Schema

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  movie: {type: Schema.Types.ObjectId, ref: 'Movie'},
  image: String
})

const Celeb = mongoose.model('Celeb', celebSchema);

module.exports = Celeb;