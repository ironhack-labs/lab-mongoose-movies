const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celebritySchema = new Schema ({
    name: {type: String, required: true},
    occupation: {type: String},
    catchPhrase: {type: String},
})

//Crear un juego a partir del modelo primer argumento nombre de la coleccion que va a crear y segundo el schema
const Celebrity = mongoose.model("Celebrity", celebritySchema)

//Para poder usarlo en app.js
module.exports = Celebrity
