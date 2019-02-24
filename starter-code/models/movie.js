const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');

const Schema    =  mongoose.Schema;

const MyMovieModel = mongoose.model('movies',
    new Schema({
    title: String,
    rating: Number
  })
);

module.exports = MyMovieModel;