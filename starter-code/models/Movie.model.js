const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title:String,
  genre:String,
  plot:String
})

const MovieModel = mongoose.model("Movie", MovieSchema)

module.exports = MovieModel;