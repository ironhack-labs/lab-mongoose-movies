require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

const movieArray = [
    {
        title: "Atrapame Si Puedes",
        genre: "Drama",
        plot: "Intentan atrapar a Leo"
    },
    {
        title: "Monsters Inc.",
        genre: "Kids",
        plot: "Monsters hiding in the closet"
    },
    {
        title: "Titanic",
        genre: "Drama",
        plot: "He dies in the end"
    },
  ]

mongoose.connect(process.env.DB)
.then(() => {
  console.log("Connected to mongoose");
})
.then(() => {
  return Movie.create(movieArray)
})
.then(movies => {
  console.log(movies);
  mongoose.connection.close();
})
