const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
})

moviesSchema.virtual('cast', {
	ref: 'Celebrity',
	foreignField: 'film',
	localField: 'title'
});

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie