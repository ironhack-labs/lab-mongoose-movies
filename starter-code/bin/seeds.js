require("dotenv").config();
const Movies = require("../models/movie");
// const Celebrities = require("../models/celebrity");
const mongoose = require("mongoose");

const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    title: "The Godfather",
    genre: "Crime",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
];

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Movies.create(movies)
    .then((dbResult) => {
      console.log(dbResult);
    })
    .catch((error) => {
      console.log(error);
    });
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
