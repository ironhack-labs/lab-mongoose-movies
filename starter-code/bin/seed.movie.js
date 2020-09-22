require("dotenv").config();
const mongoose = require("mongoose");
const MovieModel = require("../models/Movie.model");

const firstMovie = [
  {
    title: "Le Dernier Trappeur",
    genre: "Documentaire",
    plot: "Un trappeur part pour sa derniere expédition dans les plateaux américains et vit une aventure extraordinaire"
  }
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    MovieModel.create(firstMovie)
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