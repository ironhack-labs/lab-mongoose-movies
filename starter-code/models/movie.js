const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShema = new Schema({
    title: String,
    genre: String,
    plot: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Movie = mongoose.model('Movie', movieShema);

// exports module in order to use it on the rout
module.exports = Movie;