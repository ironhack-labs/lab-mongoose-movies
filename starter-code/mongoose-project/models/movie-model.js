// require mongoose
const mongoose = require("mongoose");


// require Schema
const Schema = mongoose.Schema;

//create model
const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please input name."]
    },
    genre: String,
    plot: String
});


const Movie = mongoose.model("Movie", movieSchema);


//export module
module.exports = Movie;