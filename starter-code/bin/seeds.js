const mongoose = require('mongoose');
// const Celebs = require('../models/Celebs');
const Movies = require('../models/Movies');

const dbName = 'movies-mongoose';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebs = [
//   {
//    name: 'Ricky Riquin',
//    ocuppation: 'Politics',
//    catchPhrase: 'Painful smile'
//   },
//   {
//     name: 'Ben Downey Jr',
//     ocuppation: 'Actor',
//     catchPhrase: 'Im ironBat'
//   },
//   {
//     name: 'Scarlett Kardashian',
//     ocuppation: 'Unknown',
//     catchPhrase: '@.@'
//   }
// ]

const movies = [
  {
    title: "Iron Man",
    genere: "Action",
    plot: "lorem"
  },
  {
    title: "Inception",
    genere: "Adventure",
    plot: "lorem"
  },
  {
    title: "12 Years Eslave",
    genere: "Drama",
    plot: "lorem"
  }
]

Movies.create(movies)
.then(movies=>{console.log(`Created: ${movies.length} celebs`)
mongoose.connection.close()})
.catch(err=>{throw(err)});

// Celebs.create(celebs)
// .then(celebs=>{console.log(`Created: ${celebs.length} celebs`)
// mongoose.connection.close()})
// .catch(err=>{throw(err)});
