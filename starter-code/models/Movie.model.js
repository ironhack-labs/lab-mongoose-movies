const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const movieSchema = new Schema (
{
    name: String,
    genre: String,
    plot: String,
}
);

module.exports = model("Movie", movieSchema);
