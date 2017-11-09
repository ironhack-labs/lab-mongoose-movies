// Celebrities seeds
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/movies-dev', {useMongoClient: true});
//
// const Celebrity = require('../models/celebrity');
//
// Celebrity.collection.drop();
//
// const celebrities = [
//   {
//     name       : "David Prowse",
//     occupation : "Actor",
//     catchPhrase : "I am your father",
//   },
//   {
//     name       : "Super ñoño",
//     occupation : "Superheroe",
//     catchPhrase : "Con el ensobine",
//   },
//   {
//     name       : "Martes y Trece",
//     occupation : "Comedian",
//     catchPhrase : "Encarnaaa",
//   }
// ];
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err){throw err;}
//   console.log("Celebrities created.");
//
//   mongoose.connection.close();
// });

// Movies seeds
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies-dev', {useMongoClient: true});

const Movie = require('../models/movie');

Movie.collection.drop();

const movies = [
  {
    title       : "Star Wars",
    genre       : "SciFi",
    plot        : "A battle in the galaxy",
  },
  {
    title       : "Gardfield",
    genre       : "Animation",
    plot        : "A fat cat eating lasagna",
  },
  {
    title       : "A clockwork orange",
    genre       : "SciFi",
    plot        : "A crazy group of guys hurting other people",
  }
];

Movie.create(movies, (err, docs) => {
  if (err){throw err;}
  console.log("Movies created.");

  mongoose.connection.close();
});
