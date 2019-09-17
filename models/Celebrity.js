const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Movie = require('./Movie')

const CelebritySchema = Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

CelebritySchema.virtual('movies', {
    ref: 'Movie',
    localField: '_id',
    foreignField: 'director',
    justOne: false
})

const Celebrity = mongoose.model('Celebrity', CelebritySchema)
module.exports = Celebrity