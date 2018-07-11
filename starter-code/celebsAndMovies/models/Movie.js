
// in the example code the line below is not commented but I dont think it is needed because it is called in app.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const movieSchema = new Schema({
  title: {type: String},
  genre: {type: String},
  plot: {type: String},
  reviews: [{reviewer: String, content: String}]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;