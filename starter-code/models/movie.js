const mongoose = require("mongoose");
const schema  = new mongoose.Schema ({
  
    title: String,
    genre: String,
    plot: String

});

const Movie = mongoose.model("movie", schema);

module.exports = Movie;