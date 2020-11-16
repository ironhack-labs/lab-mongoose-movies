const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movies = new Schema({
    title: String,
    genre: String,
       plot: String
});

const Movies = mongoose.model("movies", movies);

module.exports = Movies;