const mongoose = require("mongoose")
const Schema = mongoose.Schema

const moviesSchema = new Schema ({

    title: String,

    genre: String,

    plot : String
})
const movies = mongoose.model("movies",moviesSchema)
module.exports = movies