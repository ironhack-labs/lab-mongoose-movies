require("dotenv").config();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movies");
const mongoose = require("mongoose");

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Hello world",
  },
    {
      name: "Rafael Nadal",
    occupation: "Tennisman",
    catchPhrase: "Vamos",
    }
];

const movies = [
  {
    title: "Matrix",
    genre: "Action",
    plot: "Fancy guys with black glasses doing amazing moves",
  }, {
    title: "Camping",
    genre: "Comedy",
    plot: "Patrick Chirac goes to les Flots Bleus"
  }
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Celebrity.create(movies)
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
