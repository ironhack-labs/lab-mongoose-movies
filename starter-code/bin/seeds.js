const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/celebrities');


// const Celebrity = require('../models/celebrity');

// const celebrities = [
//   {
//     name: 'Tom Cruise',
//     occupation: 'Actor',
//     catchPhrase: 'Ironhack is amazing',
//   },
//   {
//     name: 'Jose Ahjram',
//     occupation: 'Athletist',
//     catchPhrase: 'I did the bootcamp 2 years ago',
//   },
//   {
//     name: 'Paul Kalkbrenner',
//     occupation: 'Dj',
//     catchPhrase: 'Music is the best thing in life',
//   }
// ];


const Movie = require('../models/movie');

const movies = [
  {
    title: 'Titanic',
    genre: 'Drama',
    plot: '1999',
  },
  {
    title: 'Indiana Jones',
    genre: 'Action',
    plot: '1989',
  },
  {
    title: 'Robocop',
    genre: 'Comedy',
    plot: '1996',
  }
];


// Celebrity.create(celebrities)
//   .then((data) => {
//     console.log('ok')
//     mongoose.connection.close()
//   })
//   .catch(error =>{
//     console.log(error)
//     mongoose.connection.close()
//   })

  Movie.create(movies)
  .then((data) => {
    console.log('ok')
    mongoose.connection.close()
  })
  .catch(error =>{
    console.log(error)
    mongoose.connection.close()
  })

