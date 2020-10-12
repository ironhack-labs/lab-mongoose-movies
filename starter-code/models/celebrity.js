const mongoose= require('mongoose')

let CelebritySchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
}) 

let celebrityModel = mongoose.model('celebritie', CelebritySchema)

module.exports=celebrityModel