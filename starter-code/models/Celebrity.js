const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
	{
		name    : String,
		ocupation : {type: String, enum: ['actor', 'singer', 'comedian', 'unknown']},
		catchPhrase : String,
		rating      : Number,
		available   : { type: Boolean, default: true }
	},
	{
		timestamps : {
			createdAt : 'created_at',
			updatedAt : 'updated_at'
		}
	}
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;