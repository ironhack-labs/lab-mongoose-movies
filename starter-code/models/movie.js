const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(

  {
    title: String,
    genre: String,
    plot: String
  }

)

const Movie = mongoose.model("movie", movieSchema)
module.exports = Movie;