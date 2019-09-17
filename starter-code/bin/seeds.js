const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.js')
const Movie = require('../models/Movie.js')

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  

  Movie.create({title: "Joe Dirt", genre: "comedy", plot: "redemption"})
  