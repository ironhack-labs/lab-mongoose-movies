const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: String,
	genre: [ String ],
	plot: String
});

module.exports = mongoose.model('Movie', movieSchema);
