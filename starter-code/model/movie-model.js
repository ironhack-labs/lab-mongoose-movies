const mongoose= require('mongoose')
const Schema = mongoose.Schema

const movieSchema = {
title: String, 
genre : String, 
plot: String,
cast : [Schema.Types.ObjectId, "celebrities"]
}


const MovieModel = mongoose.model('movies',movieSchema )
module.exports= MovieModel