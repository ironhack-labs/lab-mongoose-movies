const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  genre: String,
  plot: String
})

const Book = mongoose.model('Book', bookSchema); 

module.exports = Book; 