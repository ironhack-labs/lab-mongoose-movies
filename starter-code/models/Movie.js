const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema ({
    title: {type: String},
    genre: {type: String},
    plot: {type: String},
})

//Crear un juego a partir del modelo primer argumento nombre de la coleccion que va a crear y segundo el schema
const Movie = mongoose.model("Movie", movieSchema)

//Para poder usarlo en app.js
module.exports = Movie
