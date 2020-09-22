require("dotenv").config();
const Movie = require("../models/movieModel");
const mongoose = require("mongoose");

const movies = [
  {
    title: "Citizen Kane",
    genre: "Drama",
    plot:
      "In a mansion called Xanadu, part of a vast palatial estate in Florida, the elderly Charles Foster Kane is on his deathbed. Holding a snow globe, he utters a word, Rosebud, and dies; the globe slips from his hand and smashes on the floor. A newsreel obituary tells the life story of Kane, an enormously wealthy newspaper publisher and industrial magnate. Kane's death becomes sensational news around the world, and the newsreel's producer tasks reporter Jerry Thompson with discovering the meaning of Rosebud.",
  },
  {
    title: "American Beauty",
    genre: "Drama",
    plot:
      "Lester Burnham is a middle-aged magazine executive who despises his job and is unhappily married to Carolyn, a neurotic and ambitious real estate broker.",
  },
  {
    title: "Matrix",
    genre: "Sci-Fi",
    plot:
      "At an abandoned hotel within a major city, a woman (later revealed to be Trinity) is cornered by a police squad but overpowers them with superhuman abilities.",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Movie.create(movies).then((dbResult) => {
      console.log(dbResult);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .catch((error) => {
    console.log(error);
  });
