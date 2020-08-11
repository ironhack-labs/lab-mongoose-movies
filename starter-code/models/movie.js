const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  year: Number,
  description: String
});

const Movie = mongoose.model(`Movie`,movieSchema)

module.exports = Movie; 









