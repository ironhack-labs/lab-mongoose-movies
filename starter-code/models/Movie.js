const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const movieSchema = new mongoose.Schema({
	title: { type: String },
	genre: { type: String },
	plot: { type: String },
});

//Export the model
module.exports = mongoose.model('Movie', movieSchema);
