//IMPORTACIONES
const mongoose= require('mongoose')
const {Schema, model}= mongoose

//SCHEMA
const MovieSchema= new Schema({
    title: String,
    genre: String,
    plot: String
})

//GENERACIÓN DEL MODELO
const Movie= model('movie', MovieSchema)

//EXPORTACIÓN
module.exports= Movie

