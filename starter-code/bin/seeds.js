// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity.model');

// require('../configs/db.config');

// const celebrities = [
//     { name: 'Tizio', occupation: 'actor', catchPhrase: 'How' },
//     { name: 'Caio', occupation: 'signer', catchPhrase: 'You' },
//     { name: 'Sempronio', occupation: 'dancer', catchPhrase: 'Doing' }
//   ];

// Celebrity.create(celebrities)
// .then(celebrityFromDB => {
// console.log(`Created ${celebrityFromDB.length} celebrity`);
// mongoose.connection.close();
// })
// .catch(err => console.log(`An error occurred while creating celebrities: ${err}`));

const mongoose = require('mongoose');
const Movie = require('../model/Movie.model');

require('../configs/db.config');

const movies = [
    { title: 'movie1', genre: 'comedy', plot: 'How' },
    { title: 'movie2', genre: 'drama', plot: 'You' },
    { title: 'movie3', genre: 'romance', plot: 'Doing' },    
  ];

  Movie.create(movies)
.then(moviesFromDB => {
console.log(`Created ${moviesFromDB.length} movies`);
mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating movies: ${err}`));