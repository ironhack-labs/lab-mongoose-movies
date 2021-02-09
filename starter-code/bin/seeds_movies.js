require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/movie");

// seed DATA
const movie_seed = [
  {
    title: "Matrix",
    genre: "SF",
    plot: "robots rebel and use humanity as a battery",
  },
  {
    title: "Star Wars",
    genre: "SF",
    plot: "orphan becomes a hero and saves the galaxy",
  },
  {
    title: "2012",
    genre: "SF",
    plot: "Maya were right about the calendar and almost everybody dies",
  },
];

// MONGOOSE CONNECTION
// 1. CONNECT TO DB

const dbRestart = function () {
  mongoose
    .connect(`mongodb://localhost/starter-code`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // NOT DROPPING DBASE AS IT IS DONE IN CELEBRITIES
      // INSERT THE DATA TO DB (RUN THE SEED)
      // 3. CREATE THE BOOK DOCUMENTS
      const pr = Movie.create(movie_seed);
      return pr;
    })
    .then((createdMovies) => {
      console.log(`Created ${createdMovies.length} movies.`);
      mongoose.connection.close();
    })
    .catch((err) => console.log("Error connection to the DB", err));
};

dbRestart();
