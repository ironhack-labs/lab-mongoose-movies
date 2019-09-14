require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const celebritiesData = require("./celebritiesData.json");
const moviesData = require("./moviesData.json");

mongoose
  .connect(`mongodb://localhost/${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Celebrity.deleteMany()
//   .then(deletedCelebrities => {
//     return Celebrity.create(celebritiesData);
//   })
//   .then(createdCelebrities => {
//     console.log("Celebrities created");
//     process.exit(0);
//   })
//   .catch(error => {
//     console.log(error);
//   });

Movie.deleteMany()
  .then(deletedMovies => {
    return Movie.create(moviesData);
  })
  .then(createdMovies => {
    console.log("Movies created");
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
  });
