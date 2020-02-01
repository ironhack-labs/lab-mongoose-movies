const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
	name: String,
	occupation: String,
	catchPhrase: String
});

module.exports = mongoose.model('celebrity', celebritySchema);
