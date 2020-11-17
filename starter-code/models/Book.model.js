const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String
})

const Book = mongoose.model('Book', bookSchema); 

module.exports = Book; 