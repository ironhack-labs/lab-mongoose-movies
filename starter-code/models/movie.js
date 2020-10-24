const mongoose = require("mongoose");
const schema  = new mongoose.Schema ({
    title: { type: String },
    genre: { type: String },
    plot: { type: String},
});
const Movie = mongoose.model("movie", schema);
module.exports = Movie;