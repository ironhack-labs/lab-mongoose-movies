// models/books.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  
  });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;