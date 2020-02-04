// const celebrities = [
//   {
//     name: "Tove",
//     occupation: "Chief Cuddle Officer",
//     catchPhrase: "The couch is mine!"
//   },
//   {
//     name: "Jennifer Lopez",
//     occupation: "Singer",
//     catchPhrase: "This butt don't age!"
//   },
//   {
//     name: "Shakira",
//     occupation: "Singer",
//     catchPhrase: "These hips don't lie!"
//   }
// ];

const movies = [
  {
    title: "Up",
    genre: "Family",
    plot:
      "An old man goes on a trip with a boyscout and it rekindles his passion for adventure!"
  },
  {
    title: "Inception",
    genre: "Action",
    plot: "Just a bunch of dreams within dreams really"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Family",
    plot: "A wizard looks for a shiny rock"
  }
];

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ironhack-celebrities", () => {
  console.log("connected to DB");
});

// const Celebrity = require("../models/Celebrity");

// Celebrity.collection.drop();

// Celebrity.create(celebrities)
//   .then(() => {
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

const Movie = require("../models/Movie");

Movie.collection.drop();

Movie.create(movies)
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
