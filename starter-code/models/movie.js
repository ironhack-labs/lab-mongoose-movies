const mongoose = require("mongoose"); 


const movieSchema = new mongoose.Schema({
  title:{type: String, require:true},
  genre:String, 
  plot:String,
})

const Movie= mongoose.model("movies", movieSchema); 
module.exports = Movie;