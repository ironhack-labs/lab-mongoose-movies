const mongoose = require('mongoose');
// const CelebrityVariable = require('../models/celebrityModels');
const MovieVariable = require("../models/movieModel")


mongoose
  .connect('mongodb://localhost/CelebrityApp', { useMongoClient: true })
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const movieArray = [
  {
    title: "James the troubled Pig",
    genre: "Drama",
    plot:
      "A mentally challenged Pig leaves the farm to try the City life as a butcher"
  },
  {
    title: "Honey, im Home!",
    genre: "Sci-Fy",
    plot:
      "A men arrives at home from work, eats and go to bed. Wakes up and goes to work. Until he notices that he is stuck in a loop and cant get out "
  },
  {
    title: "Smart Movie",
    genre: "Comedy",
    plot: "A men reads 6th Grade Science books from the 30`s"
  }
];


MovieVariable.create(movieArray)
  .then((result) => {
    console.log("Success!")
    console.log("-=-==--==-=--=" + result);
  })
  .catch((err) => {
    console.log("fail!")
    console.log(err);
  })


// const celebrityArray = [
//   {
//     name: "Worthless Famous Guy ",
//     occupation: "Selfie Producer",
//     catchPhrase: " 'but first, lets take a selfie '"
//   },
//   {
//     name: "Average Cat Lady",
//     occupation: "Cat hoarder",
//     catchPhrase: "'Meow!'"
//   },
//   {
//     name: "Jokeless Comedian",
//     occupation: " bad comedian ",
//     catchPhrase: "'bada dum tssss'"
//   }
// ];


// CelebrityVariable.create(celebrityArray)
//   .then((result) => {
//     console.log("Success!")
//     console.log("-=-==--==-=--="+result);
//   })
//   .catch((err) => {
//     console.log("fail!")
//     console.log(err);
//   })