const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Celebrity = require('../models/Celebrity');

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  image: String,
  actors: [ { type : Schema.Types.ObjectId, ref: 'Celebrity' } ]
})

let Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie