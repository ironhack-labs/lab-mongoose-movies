const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


// const celebrityData = [
//     {
//         name: "Kristen Bell",
//         occupation: "actor",
//         catchPhrase: "xoxo, Gossip Girl",
//     },
//     {
//         name: "Amy Winehouse",
//         occupation: "singer",
//         catchPhrase: "No one can stop me",
//     },
//     {
//         name: "Kim Kardashian",
//         catchPhrase: "You know, like ...",
//     },
// ];

//Insert the documents with create() or insertMany() methods
// Celebrity.create(celebrityData)
//   .then(celebrityResult => {
//     console.log(`inserted ${celebrityResult.length} Celebrities YAY`);
//   })
//   .catch(err => {
//     console.log("Created failure!!", err);
//   });

const movieData =[
  {
    title: "Harry Potter",
    genre: "sci-fi",
    plot: "A young boy discover that he is a Wizard",
  },
  {
    title: "Harry Potter 2",
    genre: "sci-fi",
    plot: "A young boy discover that he is a Wizard",
  },
  {
    title: "Harry Potter 3",
    genre: "sci-fi",
    plot: "A young boy discover that he is a Wizard",
  },
];

//Insert the documents with create() or insertMany() methods
Movie.create(movieData)
  .then(movieResult => {
    console.log(`inserted ${movieResult.length} MOVIES YAY`);
  })
  .catch(err => {
    console.log("Created failure!!", err);
  });