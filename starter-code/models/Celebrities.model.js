const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritiesSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    film: String
})

const Celebrity = mongoose.model('Celebrity', celebritiesSchema)

module.exports = Celebrity