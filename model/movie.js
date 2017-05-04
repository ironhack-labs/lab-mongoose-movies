const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Celebs = require('./celebrity');

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Even untitled movies have titles....so give it a title please'],
    minlength: 1,
    maxlength: [200, 'I wonder what has inspired you to write so much about this movie']
  },

  director: {
    type: String,
    required: [true, 'Please find out who directed this movie before you continue'],
    maxlength: [ 100, "I was looking for a name of an individual" ]
  },

  //not sure if this would work both ways the way I am setting it up
  cast: [ Celebs.schema ],

  coverImg: {
    type: String,
    default: '/images/movie.png'
  },

  movieDesc: String,

  movieYear: {
    type: Number,
    min: [ 1890, 'I think it is safe to say that movies did not exist before 1890'],
    max: [ 2017, 'You can\'t possibly expect me to believe that you have seen a movie from the future']
}

});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
