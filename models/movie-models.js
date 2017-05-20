const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Type a tittle"]
    },
    genre: {
        type: String,
        required: [true, "type a genre"]
    },
    plot: {
        type: String,
        required: [true, "type a plot"]
    }

});

const Movies = mongoose.model('Movies', movieSchema);
module.exports = Movies;
