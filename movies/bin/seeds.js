const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
const Movie = require('../models/movie');

const movies = [
  {
title       : "La pelicula de Clementina",
genre      : "Dramón",
plot   : "Programadora muere en el intento",
  },
  {
    title       : "Programa otro día",
    genre      : "Comedia",
    plot   : "Agente especial busca trabajo",
  },
  {
    title       : "Deep hole",
    genre      : "Dramón",
    plot   : "Viajamos a un lugar oscuro donde se aprende programación",
  }
];

Movie.collection.drop();

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((cel) => {
    console.log(cel.title)
  });

  mongoose.connection.close();
});



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/celebrities-example', {useMongoClient: true});
// const Celebrity = require('../models/celebrity');
//
// const celebrities = [
//   {
// name       : "Jessica",
// ocupation      : "Actress",
// catchPhrase   : "I'm divine",
//   },
//   {
//     name       : "Marc",
//     ocupation      : "Actor",
//     catchPhrase   : "I'm tough",
//   },
//   {
//     name       : "Jon",
//     ocupation      : "Director",
//     catchPhrase   : "I'm rude",
//   }
// ];
//
// Celebrity.collection.drop();
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((cel) => {
//     console.log(cel.name)
//   });
//
//   mongoose.connection.close();
// });
