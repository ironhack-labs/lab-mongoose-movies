//IMPORTACIONES
const mongoose          = require('mongoose');
const { Schema, model } = mongoose;

//SCHEMA
const movieSchema = new Schema ({
    title: String,
    genre: String,
    plot: String
})

//GENERACION DEL MODELO
const Movie = model('Movie', movieSchema)

//EXPORTACIONES
module.exports = Movie