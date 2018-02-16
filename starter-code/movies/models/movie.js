const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const MovieSchema = new Schema({
  title      : {type: String, required: [true, 'Please enter a title']},
  genre     : {type: String, required: [true, 'Please enter a genre']},
  plot  : {type: String, required: [true, 'Please enter a plot']}
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;