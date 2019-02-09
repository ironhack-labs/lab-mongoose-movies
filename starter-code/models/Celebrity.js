let mongoose = require('mongoose')
let Schema = mongoose.Schema

let celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,

})

module.exports = mongoose.model('Celebrity', celebritySchema)