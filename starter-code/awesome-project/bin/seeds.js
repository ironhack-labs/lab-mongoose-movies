const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'awesome-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Angelina Jolie',
//     ocupation: 'actress',
//     catchPhrase: 'ni idea',
//   },
//   {
//     name: "Harry Potter",
//     ocupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     catchPhrase: "J.K. Rowling ",
//   },
//   {
//     name: "To Kill a Mockingbird ",
//     ocupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     catchPhrase: "Harper Lee",
//   }
// ]

const movies = [
  {
        title: 'Malditos bastardos',
        genre: 'War',
        plot: 'peli de nazis',
      },
      {
        title: 'Brave Heart',
        genre: 'Epic war',
        plot: 'peli de guerreros escoceses',
      },
      {
        title: 'Akira',
        genre: 'Distopic future',
        plot: 'peli anime futurística de poderes',
      }
    
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});