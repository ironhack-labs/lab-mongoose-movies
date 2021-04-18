const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
	name: { type: String, required: true },
	occupation: { type: String, enum: ["Actor", "Singer", "Comedian", "Unknown"], required: true },
	catchPhrase: { type: String, required: true },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
