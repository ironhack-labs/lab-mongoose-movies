//importaciones

const mongoose = require('mongoose')
const {Schema, model} = mongoose

const celebritySchema = new Schema({
    name:String,
    occupation:String,
    catchPhrase:String
})

//generando el modelo
const Celebrity = model("Celebrity", celebritySchema)

module.exports = Celebrity