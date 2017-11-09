const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MovieySchema = new Schema({
  name : String,
  occupation : Number,
  catchPhrase : Number,
});

const Movie = mongoose.model('Movie', MovieySchema);
module.exports = Movie;
// CHANGE IT!!! AND REMOVE THIS MESSAGE
