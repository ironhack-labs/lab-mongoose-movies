const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MovieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})

MovieSchema.virtual('moviesOf', {
	ref: 'Celebrities',
	foreignField: 'moviesOf',
	localField: 'title'
});

const Movies = mongoose.model('Movies', MovieSchema)

module.exports = Movies