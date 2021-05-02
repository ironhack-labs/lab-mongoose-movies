const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');


mongoose
.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const celebrities = [
//     {
//         name: 'Omar Little',
//         occupation: 'Stick-up artist',
//         catchPhrase: 'All in the game',
//     },
//     {
//         name: 'Stan Marsh',
//         occupation: 'Elementary school student',
//         catchPhrase: 'Oh my God! They killed Kenny!',
//     },
//     {
//         name: 'Hodor',
//         occupation: 'Door holder',
//         catchPhrase: 'Hodor',
//     },
// ];

// Celebrity.create(celebrities)
//   .then(celebritiesFromDB => {
//     console.log(`Created ${celebritiesFromDB.length} celebrities`);
 
//     // Once created, close the DB connection
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating celerities from the DB: ${err}`));


const movies = [
  {
    title: 'title 1',
    genre: 'genre 1',
    plot: 'plot 1',
  },
  {
    title: 'title 2',
    genre: 'genre 2',
    plot: 'plot 2',
  },
  {
    title: 'title 3',
    genre: 'genre 3',
    plot: 'plot 3',
  },
  {
    title: 'title 4',
    genre: 'genre 4',
    plot: 'plot 4',
  },
  {
    title: 'title 5',
    genre: 'genre 5',
    plot: 'plot 5',
  },
]

Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));