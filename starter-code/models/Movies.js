const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
});

const model = mongoose.model("Movie", movieSchema);

module.exports = model;