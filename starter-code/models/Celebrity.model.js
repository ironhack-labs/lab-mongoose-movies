//IMPORTACIONES
const mongoose= require('mongoose')
const {Schema, model}= mongoose

//SCHEMA
const CelebritySchema= new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

//GENERACIÓN DEL MODELO
const Celebrity= model('Celebrity', CelebritySchema)

//EXPORTACIÓN
module.exports= Celebrity