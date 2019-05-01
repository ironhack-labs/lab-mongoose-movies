const mongoose = require('mongoose');
// const express  = require('express');
const Schema   = mongoose.Schema;

const movieSchema = new Schema ({
  title: String,
  year: String,
  director: String,
  duration: String,
  genre: Array,
  rate: String
});


const  movies = mongoose.model('celebrity', movieSchema);
module.exports = movies;