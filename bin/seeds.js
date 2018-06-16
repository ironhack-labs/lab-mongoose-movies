const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const dbName = "lab-mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

let celebreties = [
  {
    name: "Mag",
    occupation: "Be cute",
    catchPhrase: "Wuff!"
  },
  {
    name: "Olga",
    occupation: "Be lazy",
    catchPhrase: "Miaow!!"
  },
  {
    name: "lkadf",
    occupation: "Be cute",
    catchPhrase: "Wuff!"
  }
];

let movies = [
  {
    title: "Im Radkasten",
    genre: "Tragedy",
    plot: "A small cat wanted to see the world but gets lost on the roadtrip"
  },
  { title: "Basti", genre: "Love Story", plot: "Young Basti tries to make his cats happy by building their home" },
  {
    title: "Loving Parents",
    genre: "Comedy",
    plot: "This is the story about Otto and Olga, son and mother who try to catch their own tails"
  }
];

Celebrity.deleteMany()
  .then(() => Celebrity.create(celebreties))
  .then(() => Movie.deleteMany())
  .then(() => Movie.create(movies))
  .then(() => {
    console.log(`Created celebreties`);
    mongoose.connection.close();
  })
  .catch(err => {
    throw err;
  });
