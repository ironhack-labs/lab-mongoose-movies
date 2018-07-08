const mongoose = require("mongoose");
const Schema = mongoose.Schema;

movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,

});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;