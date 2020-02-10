require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../../models/movie.model");

mongoose.connect(`mongodb://localhost/${process.env.DB}`);

const movies = [
  {
    title: "Titanic",
    genre: "Romantic",
    plot:
      "A really giant ship find the love in an iceberg, but humans don't enyoy their love and gets punished in cold water because of their cold hearth"
  },
  {
    title: "Bee movie",
    genre: "Real story",
    plot: "A bee flirt with a marriaged woman"
  },
  {
    title: "Random movie",
    genre: "Some random s...",
    plot:
      "A very previsible thing occurs and all gets f... but with some presible things all gets fixed"
  }
];

Movie.insertMany(movies)
  .then(allMovies =>
    console.log("Movies seed finished, all created :", allMovies)
  )
  .then(x => mongoose.connection.close())
  .catch(err => console.log("An erro have occurred: ", err));
