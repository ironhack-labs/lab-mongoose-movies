const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;
// Declare the Schema of the Mongo model
const movieSchema = new Schema({
	title: { type: String },
	genre: { type: String },
	plot: { type: String },
	actor: { type: Schema.Types.ObjectId, ref: 'Celebrity' },
});

//Export the model
module.exports = mongoose.model('Movie', movieSchema);
