require("dotenv").config();
require(".././app");

// const CelebritieModel = require("../models/Celebrity");

// const celebrities = [
//   {
//     name: "Arnold schwarzenegger",
//     occupation: "Actor",
//     catchPhrase: "I will be back",
//   },
//   {
//     name: "Sylvester Stallone",
//     occupation: "Actor",
//     catchPhrase: "It wasnt my war",
//   },
//   { name: "Jessica Alba", occupation: "Actress", catchPhrase: "" },
// ];

// CelebritieModel.insertMany(celebrities)
//   .then((dbRes) => console.log(dbRes))
//   .catch((err) => console.log(err));

const MovieModel = require("../models/Movie");

const movies = [
  {
    title: "Predator",
    genre: "Action",
    plot:
      "Le major Dutch Schaeffer prend la tête d'un commando chargé de délivrer un groupe de civils américains prisonniers de guérilleros en Amérique centrale. Largués en hélicoptère dans une jungle hostile, ses hommes et lui découvrent des corps de soldats écorchés vifs... avant d'être pris en chasse par une mystérieuse créature.",
  },
  {
    title: "Rocky",
    genre: "Drama",
    plot: "Boxe",
  },
  {
    title: "Akira",
    genre: "Anime",
    plot: "end of the world",
  },
];

MovieModel.insertMany(movies)
  .then((dbRes) => console.log(dbRes))
  .catch((err) => console.log(err));
