const { builtinModules } = require('module')
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

    title: String,
    genre: String,
    plot: String

}, {
    timestamps: true
})

const Movies = mongoose.model('movie', movieSchema)

module.exports = Movies