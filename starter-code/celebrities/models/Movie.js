const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
},{
  timestamps:{
    createdAt:'created_at',
    updatedAt:'updated_at'
  }
})

module.exports = mongoose.model('Movie',movieSchema)