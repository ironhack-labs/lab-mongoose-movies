//Iteration 1: The Celebrity Model
const mongoose = require('mongoose');
const celebritySchema = new mongoose.Schema(
	{
		name: String,
		occupation: String,
		catchPhrase: String
	}
);

celebritySchema.virtual('movies', {
	ref: 'Movie',
	foreignField: 'actors',
	localField: 'name'
});

const Celebrity = mongoose.model('Celebrity', celebritySchema); // artists
module.exports = Celebrity;