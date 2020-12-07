const mongoose = require("mongoose")

const MoviesSchema = new mongoose.Schema({
  name:String,
  genre:String,
  plot:String
})

module.exports = mongoose.model("Movies",MoviesSchema);