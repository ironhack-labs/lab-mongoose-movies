const mongoose = require("mongoose");
require("dotenv").config();
const Celebrity = require("../models/celebrity");
const movieModel = require("./../models/movies");

const movies = [
  {
    title: "Pirates of Carribean",
    genre: "Comedy",
    plot: "A movie about a nice pirate",
    cast: ["603f2e5a2087391291e1cd32"],
  },
];

movieModel
  .insertMany(celebrities)
  .then((celeb) => console.log(celeb))
  .catch((err) => console.log(error));

// const celebs = [
//   {
//     name: "Johnny DEPP",
//     occupation: "actor",
//     catchPhrase: "Go pirates",
//   },
//   {
//     name: "Johnny REP",
//     occupation: "football player",
//     catchPhrase: "Qui c'est les plus forts ? Evidemment, c'est les verts",
//   },
//   {
//     name: "Johnny RIP HALLIDAY",
//     occupation: "singer",
//     catchPhrase: "L'envie d'avoir envie",
//   },
// ];

// Celebrity.insertMany(celebs)
//   .then(() => console.log("Yeahh"))
//   .catch((err) => console.log(err));
