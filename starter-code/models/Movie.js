const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String 
});

const movieModel = mongoose.model("Movie", movieSchema);
module.exports = movieModel;