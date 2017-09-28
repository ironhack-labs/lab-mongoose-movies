const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = {
	name : String,
	genre : String,
	plot : String,
}

const Mov = mongoose.model('Mov', moviesSchema)
module.exports = Mov