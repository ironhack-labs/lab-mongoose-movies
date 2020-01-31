const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const connection = require("../connection-db");

const celebrities = [
  {
    name: "",
    occupation: "",
    catchPhrase: ""
  },
  {
    name: "",
    occupation: "",
    catchPhrase: ""
  },
  {
    name: "",
    occupation: "",
    catchPhrase: ""
  }
];

const movies = [
  {
    title: "",
    genre: "",
    plot: ""
  },
  {
    title: "",
    genre: "",
    plot: ""
  },
  {
    title: "",
    genre: "",
    plot: ""
  }
];

connection(async () => {
  //await Celebrity.collection.drop();
  //await Movie.collection.drop();
  await Celebrity.create(celebrities);
  await Movie.create(movies);
});
