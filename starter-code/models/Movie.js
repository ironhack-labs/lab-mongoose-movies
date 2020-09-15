const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {type: String, rquired: true},
    genre: {type: String, rquired: true, enum: ['terror','action', 'child', 'comedy', 'drama', 'classic', 'sci-fi', 'other']},
    plot: {type: String, rquired: true},
}, 
{
    timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
