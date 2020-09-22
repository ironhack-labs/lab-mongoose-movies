require("dotenv").config();
const Movie = require("../models/Movie.model");
const mongoose = require("mongoose");

const movies = [
  {
    title: "Gladiator",
    genre: " Action",
    plot:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  },
  {
    title: "Deadpool",
    genre: " Comedy",
    plot:
      "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
  },
  {
    title: "Braindead",
    genre: " Horror",
    plot:
      "A young man's mother is bitten by a Sumatran rat-monkey. She gets sick and dies, at which time she comes back to life, killing and eating dogs, nurses, friends, and neighbors.",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Movie.create(movies)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
