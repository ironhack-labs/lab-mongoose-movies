const mongoose = require('mongoose')



let celebritiesSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})


module.exports =  mongoose.model('Celebrity', celebritiesSchema) //Celebrity nombre de la coleccion 
