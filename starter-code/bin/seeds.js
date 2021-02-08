const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrity");
const Movie = require("./../models/movie")
require("dotenv").config();

// DATA
const celebrities = [
  {
    name: "Brad Pitt",
    ocupation: "actor",
    catchPhrase: "I'm handsome",
  },
  {
    name: "Isabel Pantoja",
    ocupation: "singer",
    catchPhrase: "Mi hijo es tonto",
  },
  {
    name: "Julian",
    ocupation: "show-man",
    catchPhrase: "I want to be in RuPaul",
  },
];

const movies = [
  {
    title: "The Matrix",
    genre: "Sci-fi",
    plot: "vaia fumada",
  },
  {
    title: "Lo que el viento se llevó",
    genre: "drama",
    plot: "I don't remember",
  },
  {
    title: "Titanic",
    genre: "drama",
    plot: "Se veia venir",
  },
];

// MONGOOSE CONNECTION
// 1. CONNECT TO DB
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((db) => {
    // 2. DROP THE DATABASE TO CLEAR IT
    console.log("Connected to the DB");
    const pr = db.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    // INSERT THE DATA TO DB (RUN THE SEED)
    // 3. CREATE THE CELEBRITIES DOCUMENTS
    const pr = Celebrity.create(celebrities);
    return pr;
  })
  .then((createdCelebrities) => {
    console.log(`Created ${createdCelebrities.length} celebrities.`);
  })
  .then(() => {
    // INSERT THE DATA TO DB (RUN THE SEED)
    // 3. CREATE THE MOVIES DOCUMENTS
    const pr = Movie.create(movies);
    return pr;
  })
  .then((createdMovies) => {
    console.log(`Created ${createdMovies.length} movies.`);
    mongoose.connection.close();
  })
  .catch((err) => console.log("Error connection to the DB", err));
