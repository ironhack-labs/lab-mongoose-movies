const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'starter-code-movie';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movie = [
  {
    title: "IronHack 1",
    genre: "Adventure",
    plot: "Students learning",
  },
  {
    title: "HSM",
    genre: "Teen",
    plot: "High School Musical",
  },
  {
    title: "O auto da compadecida",
    genre: "Comedy",
    plot: "Nao sei, só sei que foi assim!",
  },
]

Movie.create(movie, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movie.length} movies`);
  mongoose.connection.close();
});

// const Celebrity = require('../models/celebrity');

// const dbName = 'starter-code';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrity = [
//   {
//     name: "Joey Tribbiani",
//     occupation: "Actor",
//     catchPhrase: "How YOU doin",
//   },
//   {
//     name: "Sheldon Cooper",
//     occupation: "Unknown",
//     catchPhrase: "Bazinga!",
//   },
//   {
//     name: "Barney Stinson",
//     occupation: "Comedian",
//     catchPhrase: "Suit up!",
//   },
// ]

// Celebrity.create(celebrity, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrity.length} celebrity`);
//   mongoose.connection.close();
// });