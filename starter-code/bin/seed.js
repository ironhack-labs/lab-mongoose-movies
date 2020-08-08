const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model.js");
const Movie = require("../models/movie-model.js");

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // const celebData = [
  //   {
  //     name: "Madonna",
  //     occupation: "singer",
  //     catchPhrase: "like a virgin",
  //   }, 
  //   {
  //     name: "Lolapop",
  //     occupation: "actress",
  //     catchPhrase: "what is that supposed to mean?",
  //   }, 
  //   {
  //     name: "Babar",
  //     occupation: "father",
  //     catchPhrase: "Un elephant, ça trompe énormément",
  //   },
  // ]

  // Celebrity.create(celebData)
  //   .then(celebResults => {
  //     console.log(`Insertion of ${celebResults.length} celebs, everything is under control`);
  //   })
  //   .catch(err => {
  //     console.log("Celeb creation failed, we are all going to die", err);
  //   });

   const movieData = [
    {
      title: "Debussi Code",
      genre: "Drama",
      plot: "truc truc truc",
    }, 
    {
      title: "I Honk Car",
      genre: "Comedy",
      plot: "truc truc truc",
    }, 
    {
      title: "The Water Bottle",
      genre: "Thriller",
      plot: "truc truc truc",
    }, 
  ]

    Movie.create(movieData)
    .then(movieResults => {
      console.log(`Insertion of ${movieResults.length} movies, everything is under control`);
    })
    .catch(err => {
      console.log("Movie creation failed, we are all going to die", err);
    });