// Iteration #1
// bin/celebrity.seeds.js
const mongoose = require("mongoose");
const Movie = require("../models/movies.model");

const DB_NAME = "lab-mongoose-movies";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movies = [
  { title: "Pi", genre: "Science Thriller", plot: "Man searches for a code to break the stock market and discovers God", cast: "That One Guy" },
  { title: "Pi", genre: "Science Thriller", plot: "Man searches for a code to break the stock market and discovers God", cast: "That One Guy" },
  { title: "Pi", genre: "Science Thriller", plot: "Man searches for a code to break the stock market and discovers God", cast: "That One Guy" },
];

Movie.create(movies)
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} movies`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("error with seed ", err);
  });
