// let newCebs = [
//   {
//     name: "Pepe Font",
//     occupation: "McDonalds CTO",
//     catchPhrase: "I'm loving it",
//   },
//   {
//     name: "Toni Luis",
//     occupation: "Trapper, economist among others",
//     catchPhrase: "Va nem a fer un piti",
//   },
//   {
//     name: "Diego Méndez",
//     occupation: "Ironhack MT and start-up CTO",
//     catchPhrase: "Justo, así es, bien visto",
//   },
// ];

let newMovies = [
  {
    title: "Shutter Island",
    genre: "Thriller",
    plot: "Mind-blowing psychopaths-island",
  },
  {
    title: "Shrek",
    genre: "Animation",
    plot: "Ugly ogres can get women too",
  },
  {
    title: "Titanic",
    genre: "Romantic comedy",
    plot: "A young man sacrifices his life for a cruise-ship fling. ",
  },
];

const Movie = require("../models/Movie.model");


const mongoose = require("mongoose");
const DB_NAME = "celebrities-app";

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log("Connected to database only to create the first information");

    Movie.insertMany(newMovies).then((movies) => {
      console.log(`${movies.length} inserted.`);
    });
  })
  .catch((error) => console.error(error));