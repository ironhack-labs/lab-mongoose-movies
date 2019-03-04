require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose.connect(process.env.DB)
.then(() => {
  console.log("connect to mongoose");
})
.then(() => {
  return Movie.insertMany([
    {
      title: "Dark City",
      genre:"Drama",
      plot: "Something happens somewhere"
    },
    {
      title: "Red City",
      genre:"Sci-fi",
      plot: "Giant cows are here"
    },
    {
      title: "Blue city",
      genre:"Comedy",
      plot: "Sex, drugs and rock n roll"
    }
  ])
})
.then(movies => {
  console.log(movies);
  mongoose.connection.close();
})