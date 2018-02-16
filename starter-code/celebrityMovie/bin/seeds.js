const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrityMovie');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')

// const celebrityData = [
//     { name: 'Janelle Monae', occupation: "Musician", catchPhrase: "You are only as beautiful as the many beautiful things you do for others without expectation" },
//     { name: 'Estelle', occupation: "Musician", catchPhrase: "Stronger than you"},
//     { name: 'Justin Hartley', occupation: "Actor", catchPhrase: "Where it be with your parents or your siblings, everyone is dealing with different kinds of things" }
//   ];

// Celebrity.create(celebrityData, (err, docs) => {
//     if (err) {
//       throw err;
//     }
  
//     docs.forEach((dro) => {
//       console.log(dro.name)
//     });
//     mongoose.connection.close();
//   });

  const movieData = [
    { name: 'Primer', genre: "Sci-fi", plot: "Time-travel" },
    { name: 'Inception', genre: "Sci-fi", plot: "Dreams" },
    { name: 'The Lord of the Rings', genre: "Fantasy", plot: "Elves" }
  ];

Movie.create(movieData, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((mov) => {
      console.log(mov.name)
    });
    mongoose.connection.close();
  });
