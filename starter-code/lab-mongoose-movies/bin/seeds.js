const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');
//const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/*
const celebs = [
  {
    name: 'Leo DiCap',
    occupation: 'Movie star',
    catchPhrase: 'Catchphrase 1'
  },
  {
    name: 'LelBron James',
    occupation: 'Meme lord',
    catchPhrase: 'Catchphrase 2'
  },
  {
    name: 'The Rock',
    occupation: 'A rock',
    catchPhrase: 'Catchphrase 3'
  }
];*/

/*
Celebrity.create(celebs, (err, data) => {
  if (err) {
    console.log(err);
  }*/

const movies = [
  {
    title: 'Rambo 1',
    genre: 'Best genre',
    plot: 'Plot 1'
  },
  {
    title: 'Rambo 2',
    genre: 'Best genre',
    plot: 'Plot 2'
  },
  {
    title: 'Rambo 3',
    genre: 'Best genre',
    plot: 'Plot 3'
  }
];


  Movie.create(movies, (err, data) => {
    if (err) {
      console.log(err);
    }

  data.forEach( (item) => {
    console.log(item.name);
  });
});
