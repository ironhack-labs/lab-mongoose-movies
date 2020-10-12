const mongoose =require('mongoose')
let MoviesSchema= new mongoose.Schema({
   title: String,
   genre: String,
   plot: String
})
let MovieModel= mongoose.model('movie', MoviesSchema)


module.exports = MovieModel