const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie     = require('../models/movie')

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Beyonce",
//     occupation: "Singer",
//     catchphrase: "hello"
//   },
//   {
//     name: "Michael Jackson",
//     occupation: "Singer",
//     catchphrase: "hey"
   
//   },
//   {
//     name: "Leonardo DiCaprio",
//     occupation: "Actor",
//     catchphrase: "lol"
//   }

// ];


// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });


// const databName = 'movies';
// mongoose.connect(`mongodb://localhost/${databName}`);

const movies = [
  { 
  title: "Escape",
  genre: "thriller",
  plot: "a man is trying to escape from a prison",
  }
];

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});