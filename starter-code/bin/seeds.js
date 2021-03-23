const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const celebs = [
  {
    name: 'Tom Cruise',
    occupation: 'Artist',
    catchPhrase: 'I\'m the best',
  },
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Artist',
    catchPhrase: 'I\'ll be back',
  },
  {
    name: 'Anakin Skywalker',
    occupation: 'Darth Vader',
    catchPhrase: 'I Am Your Father',
  },
];

const movies = [
  {
    title: 'Star Wars: Episode I – The Phantom Menace ',
    genre: 'Fiction',
    plot: 'Darth Vader appears for the first time in the shoes of the still-young anakin skywalker.',
  },
  {
    title: 'I Am Legend',
    genre: 'Fiction',
    plot: 'Will Smith plays one of the last human beings on earth that is now a place full of terrifying night creatures.',
  },
  {
    title: 'Interestelar',
    genre: 'Fiction',
    plot: 'The first discovery of a habitable planet!',
  },
];

mongoose
  .connect('mongodb://localhost/lab-movies', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

      Movie.insertMany(movies)
      .then(insertedMovies => {
        console.log(`Inserted ${insertedMovies.length} movies!!!`);
        mongoose.connection.close(); 
      })
      .catch(error => console.log(error));

  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


