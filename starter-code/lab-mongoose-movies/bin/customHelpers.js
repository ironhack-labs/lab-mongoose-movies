const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity');
const Movies = require('../models/movie');

let customHelpers = [

  //Take the celebrity id as parameter and return 'checked' 
  //to be added to the checkbox properties if the 
  //celebrity is part of the cast members of that movie
  castCheckbox = function(celebrityId, movieId) {
    console.log("celebrity id:",celebrityId);
    console.log("movie id", movieId);
    Movies.findById(movieId)
    .then((movie) => {
      console.log(movie);
    })
    return `checked`;
  }








];

module.exports = customHelpers;