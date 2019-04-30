const mongoose = require("mongoose");
// const Celebs = require("../models/models");
const Movies = require("../models/models");

const dbName = "celeb-DB";
// const dbName = "movie-DB";

mongoose.connect(`mongodb://localhost/${dbName}`);

// let celebArray = [
//   {
//     name: "Fonzie",
//     occupation: "Being Awesome",
//     catchPhrase: "Aaaayy"
//   },
//   {
//     name: "Bruce Banner",
//     occupation: "Hulking Out",
//     catchPhrase: "Dont make me angry"
//   },
//   {
//     name: "Scooby",
//     occupation: "Restaurant Critic",
//     catchPhrase: "Ruh-Roh"
//   }
// ];

// Celebs.create(celebArray, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebArray.length} items in database.`);
//   mongoose.connection.close();
// });

let movieArray = [
  {
    title: "Game Of Thrones",
    genre: "Fantasy",
    plot: "People fight each other and zombies"
  },
  {
    title: "Birdemic: Shock and Terror",
    genre: "B movie",
    plot: "Birds attack"
  },
  {
    title: "Sharknado",
    genre: "Comedy",
    plot: "Sharks are in tornados"
  }
];

Movies.create(movieArray, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movieArray.length} items in database.`);
  mongoose.connection.close();
});
