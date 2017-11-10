const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/daily-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrities = [
  {
    name: 'Matthew Mcconaughey',
    occupation: 'Actor',
    catchPhrase: 'Alright,alright,alright'
  },
  {
    name: 'Rick Sanchez',
    occupation: 'Scientist',
    catchPhrase: 'Wubba lubba dub dub'
  },
  {
    name: 'Matthew Mcconaughey',
    occupation: 'Actor',
    catchPhrase: 'Alright,alright,alright'
  }
];

const movies = [
  {
    title: 'Inception',
    genre: 'Science Fiction',
    plot: 'Dream boy'
  },
  {
    title: 'Inception',
    genre: 'Science Fiction',
    plot: 'Dream boy'
  },
  {
    title: 'Inception',
    genre: 'Science Fiction',
    plot: 'Dream boy'
  },
];

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  console.log('Celebrities Added');
});

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }
  console.log('Movies Added');
  mongoose.connection.close();
});
