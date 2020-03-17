const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
  title: {type: String,unique: true, required: true},
  genre: {type: String},
  plot: {type: String},
  image: {type: String},
  },{
  timestamps: true 
  }
)

const Movie = mongoose.model("Movie", moviesSchema)
module.exports = Movie;