const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

const Movie = require('../models/Movie');

// Uncomment to save the original data

mongoose
  .connect('mongodb://localhost/movies', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const celebrities = [
  {
    name: 'Giorgio Grassini',
    occupation: 'Chef',
    catchPhrase: 'Salvami por piacere',
  },
  {
    name: 'Diego Méndez',
    occupation: 'Singer',
    catchPhrase: 'En un mundo postapocalíptico',
  },
  {
    name: 'Juan Sánchez',
    occupation: 'Actor',
    catchPhrase: 'Acuérdate de cuando empezaste',
  },
];

const movies = [
  {
    title: 'Pepe1',
    genre: 'Pepe',
    plot: 'Parte 1 de la trilogía Pepe',
  },
  {
    title: 'Pepe2',
    genre: 'Pepe',
    plot: 'Parte 2 de la trilogía Pepe',
  },
  {
    title: 'Pepe3',
    genre: 'Pepe',
    plot: 'Parte 3 de la trilogía Pepe',
  },
];


Celebrity.create(celebrities);
Movie.create(movies);
