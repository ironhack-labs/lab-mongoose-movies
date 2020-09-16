const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

const celebrities = [
  {
    name: "Mufaza",
    ocupation: "Jungle king",
    catchPhrase: "Remember who you are!",
  },
  {
    name: "Lightning McQueen",
    ocupation: "Pilot",
    catchPhrase: "Ka-chow!",
  },
  {
    name: "Ernesto de La Cruz",
    ocupation: "Singer",
    catchPhrase: "For this music is my language, And the world es mi familia",
  },
];

const movies = [
  {
    title: 'Lion King',
    genre: 'Animation',
    plot: 'Hamlet with cute lions',
  },
  {
    title: 'Coco',
    genre: 'Animation',
    plot: 'The Sixth Sense with mexicans',
  },
  {
    title: 'Cars',
    genre: 'Animation',
    plot: 'Fast and Furious with live cars',
  },
];

mongoose
  .connect("mongodb://localhost/starter-code", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    try {
      const celebrityResult = await Celebrity.insertMany(celebrities);
      const movieResult = await Movie.insertMany(movies);
      console.log(`Seeded the database with ${celebrityResult.length} celebrities!`);
      console.log(`Seeded the database with ${movieResult.length} movies!`);
    } catch (err) {
      console.error(err);
    }
  })
  .catch((err) => console.error("Error connecting to mongo", err));
