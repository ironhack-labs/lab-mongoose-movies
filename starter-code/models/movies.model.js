const mongoose = require('mongoose')
const Schema = mongoose.Schema

//07. Movies - Model
const moviesSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true
  }
  
},{ timestamps: true})


const Movies = mongoose.model('Movies', moviesSchema)
module.exports = Movies