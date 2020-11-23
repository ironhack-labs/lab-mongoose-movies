const mongoose = require("mongoose")

let MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String
})

let Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie