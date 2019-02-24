//call mongoose
const mongoose = require('mongoose')
//create Schema
const Schema = mongoose.Schema
//Asign database schema 
const celebritySchema = new Schema ({
//create new Schema 
    name: String,
    occupation: String,
    catchPhrase: String
})

//Asign database model to Celebrity
const Celebrity = mongoose.model('Celebrity', celebritySchema)
//export 
module.exports=Celebrity;