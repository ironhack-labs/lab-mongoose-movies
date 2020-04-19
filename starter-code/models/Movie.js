const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = {
	title: { type: String, required: true },
	genre: { type: String, default: 'n/a' },
	plot: { type: String },
	actors: [String],
};

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
