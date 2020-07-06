const mongoose = require('mongoose')
const Schema = mongoose.Schema
const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    moviesOf: String
})

const Celebrities = mongoose.model('Celebrities', celebSchema)

module.exports = Celebrities