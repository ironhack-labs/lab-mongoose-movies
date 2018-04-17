const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title:{type: String, require: true},
    genre: {type: String},
    plot: {type: String}
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;