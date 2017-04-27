/*jshint esversion: 6*/
const mongoose = require('mongoose');

const Movie = require('../models/movies');

mongoose.connect('mongodb://localhost:27017/celebrities');

// const Celebrities = [
//   {
//     name: 'Christopher Walken',
//     occupation: 'Actor',
//     catchPhrase: 'Just listen to this'
//   },
//   {
//     name: 'Mathew McConnahey',
//     occupation: 'Actor',
//     catchPhrase: 'Alright, alright, alright'
//   },
//   {
//     name: 'Tom Cruise',
//     occupation: 'Actor',
//     catchPhrase: 'Awesome'
//   }];
//
// Celebrity.create(Celebrities, (err, docs)=> {
//   if(err) {
//     throw err;
//   }
//   docs.forEach((celebrity)=>{
//     console.log(celebrity.name);
//   });
//   mongoose.connection.close();
// });

const Movies = [
  {
    title: 'The Attack of the Sheep',
    genre: 'Thriller',
    plot: 'A herd of sheep attack a lonely bicycle rider on the way to his AA meeting.'
  },
  {
    title: 'Blue Sun',
    genre: 'Sci-Fi',
    plot: 'One quiet day, the sun suddenly turns blue while a couple is vacationing in Phuket Thailand.'
  },
  {
    title: 'Goodbye Yesterday',
    genre: 'Drama',
    plot: 'A woman remembers that a man did not say goodbye to her, the previous day. She is on a mission to find him and kill him.'
  }];

Movie.create(Movies, (err, docs)=> {
  if(err) {
    throw err;
  }
  docs.forEach((movie)=>{
    console.log(movie.title);
  });
  mongoose.connection.close();
});
