const mongoose = require('mongoose');
const express = require('express');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: String,
    plot: String,
    stars: [ {type: Schema.ObjectId, ref: 'Celebrity' } ]
  }
);

const Movie = mongoose.model( 'Movie', movieSchema );

module.exports = Movie;