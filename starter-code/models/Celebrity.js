const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema(
	{
		name    : String,
		ocupation : {type: String, enum: ['actor', 'singer', 'comedian', 'unknown']},
		catchPhrase : String
	},
	{
		timestamps : {
			createdAt : 'created_at',
			updatedAt : 'updated_at'
		}
	}
);

const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;