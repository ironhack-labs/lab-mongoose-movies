const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebDB');

const Celebrity = require('../models/celebModel.js');
const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Cruise with me!'
  },
  {
    name: 'Angelina Jolie',
    occupation: 'Actress',
    catchPhrase: 'Brad, the kids are living with me!'
  },
  {
    name: 'Daniel Radcliff',
    occupation: 'Actor',
    catchPhrase: 'Adaba Kadabra'
  }
];

const Movie = require('../models/movieModel.js');
const movies = [
  {
    title: 'Titanic',
    genre: 'Romance/ Drama',
    plot: 'Ship sinks, all die'
  },
  {
    title: 'Shawshank Redemption',
    genre: 'Drama',
    plot: 'The guy escapes, lives a good life'
  },
  {
    title: 'Nemo',
    genre: 'Comedy',
    plot: 'Fish gets kidnapped, Daddy has to find him'
  }
];

Celebrity.create(celebrities, (err, result) => {
  if (err) {
    next(err);
    return;
  }

  result.forEach((oneCeleb) => {
    console.log(`name = "${oneCeleb.name}", \n`);
  });

  // do this in the callback of celebrity.create
  Movie.create(movies, (err, result) => {
    if (err) {
      next(err);
      return;
    }

    result.forEach((oneMovie) => {
      console.log(`name = "${oneMovie.title}", \n`);
    });

    mongoose.disconnect();
  });
});
