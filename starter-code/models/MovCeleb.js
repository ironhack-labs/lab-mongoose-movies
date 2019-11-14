// models/books.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movcelebSchema = new Schema({
  _movie: {type: Schema.Types.ObjectId, ref: 'Movie'},
  _actors: {type: Schema.Types.ObjectId, ref: 'Celebrity'},

  });

const MovCeleb = mongoose.model("MovCeleb", movcelebSchema);

module.exports = MovCeleb;