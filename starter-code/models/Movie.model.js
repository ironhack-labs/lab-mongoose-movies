const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//CREACION DEL SCHEMA
const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})

// MODELO
const Movie = model('Movie', movieSchema)

//EXPORTACION
module.exports = Movie