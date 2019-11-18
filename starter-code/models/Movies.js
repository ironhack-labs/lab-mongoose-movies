// models/movies

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
const moviesSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String   
  },
);

// CREATE MODEL celebriity, it is going to be celebrities en monogdb
const Movies = mongoose.model('Movies', moviesSchema);

// EXPORT
module.exports = Movies;