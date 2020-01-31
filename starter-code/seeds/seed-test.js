const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const connection = require("../connection-db");

const celebrities = [
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "The most important battles in life are those that we fight daily in the silence of our soul"
  },
  {
    name: "Russell Crowe",
    occupation: "Actor",
    catchPhrase: "What we do in life has its echo in the eternity"
  },
  {
    name: "Marlon Brando",
    occupation: "Actor",
    catchPhrase: "I have always refused to be a doll moved by the threads of the powerful"
  }
];

const movies = [
  {
    title: "Inception",
    genre: "Action, Thriller, Science Fictio",
    plot: "The protagonist must enter the dreams of his victim and introduce an idea into his mind"
  },
  {
    title: "Gladiator",
    genre: "Action, Historic",
    plot: "A Roman general forced to be a gladiator seeks revenge against his family's murderer"
  },
  {
    title: "The Goofather",
    genre: "Thriller",
    plot: "History of the family of Italian gangsters most powerful in New York"
  }
];

connection(async () => {
  //await Celebrity.collection.drop();
  //await Movie.collection.drop();
  await Celebrity.create(celebrities);
  await Movie.create(movies);
});
