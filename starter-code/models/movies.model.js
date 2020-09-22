var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
});

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;