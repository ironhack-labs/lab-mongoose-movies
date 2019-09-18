const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    celebrity: {type: Schema.Types.ObjectId, ref: 'Celebrity'},
    genre: String,
    plot: String,
    image: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie  