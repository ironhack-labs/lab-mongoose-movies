const mongoose= require('mongoose')

let MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
}) 

let movieModel = mongoose.model('movie', MovieSchema)

module.exports=movieModel