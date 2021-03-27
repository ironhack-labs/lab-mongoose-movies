require('../app');

const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity');


// const celebrities = [
//   { name: 'Charlie Chaplin', occupation: 'actor', cathPhrase: 'We think too much ad feel too little' },
//   { name: 'George Clooney', occupation: 'actor', cathPhrase: 'The only failure is not to try' },
//   { name: 'Audrey Hepburn', occupation: 'actress', cathPhrase: 'Nothing is impossible, the word itself says I`m possible' },
// ]

// Celebrities.create(celebrities)
// .then(() => {
//   mongoose.connection.close();
// })
// .catch(err => console.log(err));


const Movies = require('../models/movie');


const movies = [
  {title: 'Modern Times',  genre: 'romance',  plot: 'The Tramp struggles to live in modern industrial society with the help of a young homeless' },
 {title: 'Breakfast At Tiffany`s', genre: 'romance', plot: 'Breakfast at Tiffany`s documents the year-long friendship of a New York writer with his neighbor Holly'} 
]

Movies.create(movies)
.then(() => {
  mongoose.connection.close();
})
.catch(err => console.log(err));