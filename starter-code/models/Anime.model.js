const mongoose = require('mongoose')
const { Schema, model } = mongoose

const Anime = model('Anime', new Schema({
    title: String,
    genre: String,
    plot: String
}))

module.exports = Anime;