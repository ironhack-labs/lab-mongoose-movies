const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iron-movies');

// const Celebrity = require('../models/celebrity');

// const celebrity = [
//     {
//      name: "Snoop Dogg",
//      occupation: "rapper",
//      catchPhrase: "Fo shizzle",
//    },
//    {
//      name: "Beyonce",
//      occupation: "singer",
//      catchPhrase: "Bootylicious",
//    },
//    {
//      name: "Charlie Sheen",
//      occupation: "actor",
//      catchPhrase: "Duh, winning",
//    },
//    {
//      name: "Arnold Schwarznegger",
//      occupation: "actor",
//      catchPhrase: "Hasta la vista, baby",
//    },
// ];

// Celebrity.create(celebrity, (err, docs) => {
//   if (err) {
//     throw err;
//   }

//   docs.forEach((celeb) => {
//     console.log(celeb.name)
//   });
//   mongoose.connection.close();
// });

const Movies = require('../models/movies');

const movies = [
  {
    title: 'Jurassik Park',
    genre: 'action',
    plot: "a good one"
  },
  {
    title: 'Jurassik World',
    genre: 'action',
    plot: "a bad one"
  },
];

Movies.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((mv) => {
    console.log(mv.title)
  });
  mongoose.connection.close();
});