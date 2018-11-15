const mongoose = require('mongoose');
// create a new schema object
const Schema   = mongoose.Schema;



// you only need to do {type: string} if you are adding more rules like a default or minlength
const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
  });

//3.1 you create the cat class using those rules
const Movie = mongoose.model('Movie', movieSchema);


module.exports = Movie;