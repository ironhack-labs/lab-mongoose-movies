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
  { title: "Homer Simpson", genre: "cartoon character", plot: "Doh!", cast: "Doh!" },
  { name: "Homer Simpson", occupation: "cartoon character", catchPhrase: "Doh!" },
  { name: "Homer Simpson", occupation: "cartoon character", catchPhrase: "Doh!" },
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
