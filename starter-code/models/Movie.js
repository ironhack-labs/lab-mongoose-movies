const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title: String,
  genre: String,
  plot: String,
  year: String,
  poster: String
},
{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('Movie', movieSchema)