// let Celebrity = require("../models/celebrity")
let Movie = require("../models/movie.js");
// let Star = require("../models/celebrity.js")
let mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/movies")
  .then(console.log("works!"))
  .catch((err) => console.log("marche pas :" + err))

// mongoose
//   .connect("mongodb://localhost/celebrities")
//   .then(console.log("works!"))
//   .catch((err) => console.log("marche pas :" + err))

// let data = [
//   {
//     name: "Machin",
//     occupation: "Actor",
//     catchPhrase: "I am an actor !"
//   },
//   {
//     name: "Truc",
//     occupation: "Actress",
//     catchPhrase: "I am an actress !"
//   },
//   {
//     name: "Globor",
//     occupation: "Destroyer of worlds",
//     catchPhrase: "I am Globor, destroyer of worlds"
//   }
// ]

const movies = [
  {
    title: "The anxious developer",
    genre: "suspense",
    plot:"A developer has to survive"
  },
  {
    title: "The happy developer",
    genre: "romantic comedy",
    plot:"A developer had a boring life until he met a fancy robot"
  },
  {
    title: "Deadvloper",
    genre: "horror",
    plot:"A developer arose from the dead"
  }
]

Movie.create(movies, (err, movie) => {
  
  if(err) console.log(err)
  console.log(movie +"imported")

})


