const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const celebritySchema = new mongoose.Schema({
	name: { type: String },
	occupation: { type: String },
	catchPhrase: { type: String },
});

//Export the model
module.exports = mongoose.model('Celebrity', celebritySchema);
