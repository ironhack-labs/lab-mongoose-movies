

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//its a convention to name your schema with capital letter

const movieSchema = new Schema({
    title: {type: String},
    genre: {type: String},
    plot:  {type: String},
    reviews: [{reviewer: String, content: String}]
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
