const mongoose = require('mongoose')
const moviesSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	plot: {
		type: String,
		required: true
	}
}, {
	timestamps: true,
	versionKey: false
})

module.exports = mongoose.model('Movie', moviesSchema)