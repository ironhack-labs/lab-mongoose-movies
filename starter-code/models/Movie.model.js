const mongoose = require("mongoose");
const {Schema, model} = mongoose;


const movieSchema = ({
	title: String,
	genre: String,
	plot: String
});

module.exports = model("Movie", movieSchema);