//IMPORTACIONES
const mongoose          = require('mongoose');
const { Schema, model } = mongoose;

//SCHEMA
const celebritySchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String
})

//GENERACION DEL MODELO
const Celebrity = model('Celebrity', celebritySchema)

//EXPORTACIONES
module.exports = Celebrity