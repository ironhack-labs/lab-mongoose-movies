let mongoose = require('mongoose')
let Schema = mongoose.Schema

let celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
},{timestamps:true});

module.exports = mongoose.model('Celebrity', celebritySchema)