const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
	name: { type: String },
	occupation: { type: String },
	catchPhrase: { type: String },
});

module.exports = mongoose.model('Celebrity', celebritySchema);
