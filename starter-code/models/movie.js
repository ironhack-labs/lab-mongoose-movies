const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const celebrityModel = require('./celebrity');

//Iteration 4 Movie model
const movieSchema = new Schema({
    "title": String,
    "genre":String,
    "plot": String,
    "cast": [{type: Schema.Types.ObjectId, ref:'celebrity'}]

});
const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;