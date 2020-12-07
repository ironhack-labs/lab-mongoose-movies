const mongoose = require('mongoose')

const Movieschema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String
})

module.exports = mongoose.model("Movies", Movieschema) 