const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
	name: String,
	occupation: {
		type: String,
		enum: [ 'Actor', 'Singer', 'Comedian', 'Being Kim Kardashian' ]
	},
	catchPhrase: String
});

const celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = celebrity;
