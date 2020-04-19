const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    photo: String,
    catchPhrase: String
})

const Celebrity = mongoose.model('CelebrityBD', celebritySchema)

module.exports = Celebrity