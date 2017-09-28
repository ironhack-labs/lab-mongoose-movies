const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritiesSchema = {
	name : String,
	occupation : String,
	catchPhrase : String,
}

const Celeb = mongoose.model('Celeb', celebritiesSchema)
module.exports = Celeb

