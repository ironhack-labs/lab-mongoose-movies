const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity');
const Movies = require('../models/movie');

let customHelpers = [

  //Take the celebrity id as parameter and return 'checked' 
  //to be added to the checkbox properties if the 
  //celebrity is part of the cast members of that movie
  castCheckbox = function(celebrityId, movie) {
    let result = '';
    movie.cast.forEach((castMember) => {
      if(castMember == celebrityId) {
        result = `checked`;
      }
    });
    return result;
  }








];

module.exports = customHelpers;