const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySch = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, { timestamps: true })

const Celebrity = mongoose.model('Celebrity', celebritySch)

module.exports = Celebrity