const mongoose = require("mongoose");
const Movie = require("../models/movie");

const dbName = "celeb-database";
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "The Fifth Element",
    genre: "sci-fi",
    plot: "Bruce Willis trying to save a bui... a galaxy full of people."
  },
  {
    title: "Three Billboards outside Ebbing",
    genre: "comedy",
    plot: "One woman stands against the system."
  },
  {
    title: "Matrix",
    genre: "sci-fi",
    plot: "One man stands against the system"
  },
  {
    title: "Captain Fantastic",
    genre: "drama",
    plot: ["One family stands against the system."]
  }
];

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Added ${movies.length} movies to the database`);
  mongoose.connection.close();
});
