/*jshint esversion: 6*/

const mongoose = require('mongoose');
// let Celebrity = require('../models/celebrity');
let Movie = require('../models/movie');

mongoose.connect('mongodb://localhost/movies-celebs');

// const celebs = [
//   {
//     name: 'Chris Pratt',
//     occupation: 'Actor',
//     catchPhrase: 'Listen my awesome mix vol 1'
//   },
//   {
//     name: 'Zoe Saldaña',
//     occupation: 'Actress',
//     catchPhrase: 'Touch me and you are dead'
//   },
//   {
//     name: 'Zaz',
//     occupation: 'Singer',
//     catchPhrase: 'Bienvenue dans ma réalité'
//   }
// ];

const movies = [
  {
    title: 'Guardians of the Galaxy',
    genre: 'Accion',
    plot: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.'
  },
  {
    title: 'Intouchables',
    genre: 'Biography',
    plot: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.'
  },
  {
    title: 'The Nightmare Before Christmas',
    genre: 'Animation',
    plot: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home cause confusion.'
  }
];

//Celebrity.collection.drop();
Movie.collection.drop();

// Celebrity.create(celebs, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//   docs.forEach((celebrity) => {
//     console.log(celebrity.name);
//   });
//   mongoose.connection.close();
// });
Movie.create(movies, (err, docs) => {
  if (err){
    throw err;
  }
  docs.forEach((movie) => {
    console.log(movie.title);
  });
  mongoose.connection.close();
});
