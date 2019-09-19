const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({ 
  title: String,
  genre: String,
  plot: String,
  stars: {type: Schema.Types.ObjectId, ref: 'Celeb'},
  creator: {type: Schema.Types.ObjectId, ref: 'User'}
})


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


