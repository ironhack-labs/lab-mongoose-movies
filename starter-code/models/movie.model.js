const mongoose = require ('mongoose')

const Movie = new mongoose.Schema ({
    title : String,
    genre : String,
    plot : String
})

const Movies = mongoose.model ('Movie', Movie)

module.exports = Movies