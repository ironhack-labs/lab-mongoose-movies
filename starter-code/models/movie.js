const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movie = new Schema({

  title: String,
  genre: String,
  plot: String
})

const movieModel = mongoose.model('Movie', movie);



//first name in mongoose model is the collection name

// celeb is referring to the schema you created



module.exports = movieModel;