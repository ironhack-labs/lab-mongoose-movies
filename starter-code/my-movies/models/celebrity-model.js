"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// the schema defines the structure of documents in this collection
const celebritySchema = new Schema({
	name: {
		type: String
	},

	ocupation: {
		type: String
	},

	catchPhrase: {
		type: String
	}

}); // End Schema



// the model has the methods to make database queries
const CelebrityModel = mongoose.model("Celebs", celebritySchema);
              


module.exports = CelebrityModel;