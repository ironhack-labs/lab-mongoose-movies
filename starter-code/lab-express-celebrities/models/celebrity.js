"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
	name: { type: String, required: true },
	occupation: { type: String, default: 'unknown' },
	catchPhrase: { type: String, required: true },
}, {
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
	}
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;