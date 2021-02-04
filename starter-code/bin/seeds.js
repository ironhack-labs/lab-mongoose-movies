const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities-model');
const Movies = require('../models/Movie.model');

require('../configs/db.config');

const celebrities = [
  {
    name: 'Katarina',
    occupation: 'actress',
    catchPhrase: 'You catch me baby!'
  },
  {
    name: 'Arnold',
    occupation: 'actor',
    catchPhrase: 'Asta la vista baby!'
  },
  {
    name: 'Vanessa',
    occupation: 'movieMaker',
    catchPhrase: 'Do it now bro!'
  }
];

const movies = [
  {
    title: 'A good Doctor',
    genre: 'Drama',
    plot: 'A man that work in hospitals'
  }
];

Celebrities.create(celebrities)
  .then(result => {
    console.log(`Created ${result.length} celebrities`);
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error occurred while creating celebrities in the DB: ${err}`));

Movies.create(movies)
  .then(result => {
    console.log(`Created ${result.length} movies`);
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error occurred while creating movies in the DB: ${err}`));