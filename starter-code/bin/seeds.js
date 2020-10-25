const mongoose = require("mongoose");


const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const celebrity = [
  {
    name: "Selena Gomez",
    occupation: "Singer",
    catchPhrase: "..."
  },
  {
    name: "Lionel Messi",
    occupation: "Footballer",
    catchPhrase: "..."
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "..."
  }
]

const movies = [
  {
    title: "La bella y la bestia",
    genre: "Musical",
    plot: "A dreamy and romantic young woman named Bella (Emma Watson) lives in a small village with her father, a gadget inventor, who is considered by some to be an insane old man"
  }
]

Movie.create(movies);
Celebrity.create(celebrity);
