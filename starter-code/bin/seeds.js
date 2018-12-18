
const mongoose = require('mongoose');
//const Celeb = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'lab-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Michael Jackson",
//     occupation: "Singer",
//     catchPhrase: "I love you",
//   },
//   {
//     name: "Mariah Carey",
//     occupation: "Singer",
//     catchPhrase: "All I want for Christmas is you",
//   },
//   {
//     name: "Leonardo Dicaprio",
//     occupation: "Actor",
//     catchPhrase: "I don't know",
//   }, 
// ]

// Celeb.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });

const movies = [
    {
      title: "Ocean",
      genre: "Drama",
      plot: "France",
    },
    {
      title: "Clown",
      genre: "Comedy",
      plot: "US",
    },
    {
      title: "The Bear",
      genre: "Family",
      plot: "France",
    }, 
  ]

  Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  });