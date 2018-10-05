const mongoose = require("mongoose"); //always start with these two lines - mogoose for the schema
const Schema   = mongoose.Schema; //schema with capital letter



//schema to make the blueprint for my object in the database
//schema - mogoose class
//based on schema we built our models
const movieSchema = new Schema ({
  title: String,
  genre: String,
  plot: String,
  review: [{reviewer: String, content: String}]
})

//export the model. Second parameter is based on the name of the schema(const movieSchema = new Schema)
//Model - how the database will look like.
//model views controler
const Movie = mongoose.model('Movie', movieSchema); //Movie = model!!!
module.exports = Movie;


