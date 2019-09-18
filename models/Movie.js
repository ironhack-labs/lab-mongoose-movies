const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MovieSchema = Schema({
    title: String,
    director: { type: Schema.Types.ObjectId, ref: 'Celebrity' },
    genre: String,
    plot: String,
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie