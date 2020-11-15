const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
}, {
    timestamp: true
});

const movie = mongoose.model("Movie", movieSchema);

module.exports = movie;