const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-movie', {useMongoClient: true});

const Celebrity = require('../models/celebrity');

const celebrityData = [
  {
    name: "Clementina",
    occupation: "Administradora",
    catchPhrase: "Nobody cares",
  },
  {
    name: "Clementina2",
    occupation: "Administradora2",
    catchPhrase: "Nobody cares2",
  },
  {
    name: "Clementina3",
    occupation: "Administradora3",
    catchPhrase: "Nobody cares3",
  },
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});



// const Movie = require('../models/movie');
//
// const movieData = [
//   {
//     title: "Clementina1",
//     genre: "Mata1",
//     plot: "Palacios1",
//   },
//   {
//     title: "Clementina2",
//     genre: "Mata2",
//     plot: "Palacios2",
//   },
//   {
//     title: "Clementina3",
//     genre: "Mata3",
//     plot: "Palacios3",
//   },
// ];
//
// Movie.create(movieData, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((movie) => {
//     console.log(movie.title)
//   });
//   mongoose.connection.close();
// });
