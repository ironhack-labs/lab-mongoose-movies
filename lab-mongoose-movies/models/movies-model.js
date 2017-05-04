const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please, provide a Movie title.'],
    maxLength: 40
  },
  genre: {
    type: String,
    required: [true, 'Please, provide the movie title.'],
    maxLength: 40
  },
  plot: {
    type: String,
    required: [true, 'Please, provide the plot of the Movie.'],
    maxLength: 200,
  },
  imageUrl: {
    type: String,
    default: '/images/defaultGif.gif'
  }

});

/////////////////////       name of the model , Schema how to define the model
////////////////////////               |     ,       |
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
