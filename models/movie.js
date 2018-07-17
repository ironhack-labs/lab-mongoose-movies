const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    celebrities: {type: Schema.Types.ObjectId, ref: 'Celebrity'},
    reviews: [{reviewer: String, content: String}]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;