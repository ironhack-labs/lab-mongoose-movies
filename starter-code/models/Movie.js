const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    genre: String,
    plot: String
}, {
        timestamps: true
    })


const movies = mongoose.model('movie', moviesSchema)

module.exports = movies
