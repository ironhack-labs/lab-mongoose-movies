const mongoose = require('mongoose');
const express = require('express');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: String,
    plot: String,
    _stars: [ {type: Schema.Types.ObjectId, ref: 'Celebrity' } ]
  }
);

const Movie = mongoose.model( 'Movie', movieSchema );

module.exports = Movie;