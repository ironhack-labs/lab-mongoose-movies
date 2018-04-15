require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const dbURL = "mongodb://localhost/lab-mongoose-movies";

const movie_data = [
  {
    title: "Torrente",
    genre: "Comedy",
    plot: "A pig in the city"


  },
  {
    title: "Harry Potter",
    genre: "Adventure",
    plot: "heheeh"
  },
  {
    title: "Ironhack",
    genre: "Drama",
    plot: "This worked in repl.it"
  }
];

let db = mongoose.connect(dbURL).then(() =>{
  Movie.collection.drop();
  console.log(`Connected to db ${dbURL}`);

  Movie.create(movie_data)
  .then((movies)=> {
    console.log(movies);
    mongoose.disconnect();

  })
  .catch((err) => {
    console.log(err)
  })

});
