const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Review = require('./review');

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please input name"]
    },
    genre: String,
    plot : String,
    
});

const Product = mongoose.model('Movie', movieSchema);
module.exports = Movie;