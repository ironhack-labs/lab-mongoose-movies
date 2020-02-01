const movieModel = require("../models/movies")
const mongoose = require('mongoose');

// const celebrities = [{
//         name: "Leonardo Dicaprio",
//         occupation: "Actor",
//         catchPhrase: "Try to sell me this pen",
//     },
//     {
//         name: "Lionel Messi",
//         occupation: "Football player",
//         catchPhrase: "I am the Best",
//     },
//     {
//         name: "J.Balvin",
//         occupation: "Singer",
//         catchPhrase: "Loco Contigo",
//     },
// ]

// mongoose
//   .connect('mongodb://localhost/labCelebrities', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//     celebrityModel
//     .insertMany(celebrities)
//     .then(dbRes => {
//       console.log("Celebrities Created");
//     })
//     .catch(err => {
//       console.log("There was an error creating the celebrities");
//     });
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


// module.exports = celebrities;


const movies = [{
  title: "The dark movie",
  genre: "Thriller",
  plot: "watch it and you will see, haha",
},
{
  title: "Spaceship",
  genre: "Sci-fi",
  plot: "Our futures depends on them",
},
{
  title: "Maradona",
  genre: "documentary",
  plot: `The "hand" of God`,
},
]

mongoose
  .connect('mongodb://localhost/labmovies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    movieModel
    .insertMany(movies)
    .then(dbRes => {
      console.log("movies Created");
    })
    .catch(err => {
      console.log("There was an error creating the movies");
    });
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


module.exports = movies;