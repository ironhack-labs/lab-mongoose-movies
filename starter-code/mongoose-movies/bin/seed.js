const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-dev');

const Celebrity = require('../models/celebrity');
// const Movie = require('../models/movie');

const celebrities = [
  {
    name        : 'Mosi Rivera Serra',
    occupation  : 'Smart Person',
    catchPhrase : 'Read a book'
  },
  {
    name        : 'Alek Rivera Serra',
    occupation  : 'Smart Person',
    catchPhrase : 'Tu mai es la gorda'
  },
  {
    name        : 'Joel Rivera Garcia',
    occupation  : 'Social Butterfly',
    catchPhrase : 'Eso.. no.. se hace!'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err
  }
  mongoose.connection.close();
});

const movies = [
  {
    title: 'Princess Mononoke',
    genre: 'Animation, Drama, Action',
    plot: 'Stupid kid lets demon touch his arm'
  },
  {
    title: 'Stuck in love',
    genre: 'Comedy, Drama',
    plot: 'Crazy family of writers and love problems'
  },
  {
    title: 'idek',
    genre: 'idek, idek, idek',
    plot: 'Something cool followed by something cooler'
  }
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err
  }
  mongoose.connection.close();
})
