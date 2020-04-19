const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  image: {
    type: String,
    default: "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/140x209/film-4001654135._CB466678728_.png"
  },
  genre: String,
  plot: String
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie