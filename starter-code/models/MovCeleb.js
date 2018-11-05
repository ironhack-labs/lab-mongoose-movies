// models/books.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movcelebSchema = new Schema({
  movie: {type: mongoose.Schema.ObjectId, ref: 'Movie' },
  actors: {type: mongoose.Schema.ObjectId, ref: 'Celebrity'}

  });

const MovCeleb = mongoose.model("MovCeleb", movcelebSchema);

module.exports = MovCeleb;