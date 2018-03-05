//require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//require Schema
const movieSchema = new Schema({
    name        : {
        type: String,
        required: [true, "Please input name."]
    },
    genre  : String,
    plot    : String,
});

//create model
const Movie = mongoose.model('Movie', movieSchema);

//export module
module.exports = Movie;