const mongoose = require("mongoose");
const Celebrity = require("../Models/Celebrity");
const Movie = require("../Models/Movie");

mongoose.connect("mongodb://localhost/starter-code");

const celebritySeed = [
  {
    name: "Matt D'Avella",
    occupation: "Filmmaker",
    catchPhrase: "As a minimalist"
  },
  {
    name: "BoJack Horseman",
    occupation: "Actor",
    catchPhrase: "Yes, I am The BoJack Horseman"
  },
  {
    name: 'Dwayne "The Rock" Johnson',
    occupation: "Actor",
    catchPhrase: "Do you smelllllllllll... what The Rock... is cooking"
  }
];

const movieSeed = [
  {
    title: "Secretariat",
    genre: "Drama",
    plot:
      "Secretariat, is a 2015 American film based on the life of famous racehorse, Secretariat."
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    genre: "Drama",
    plot:
      "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game."
  },
  {
    title: "Minimalism",
    genre: "Documentary",
    plot: "How might your life be better with less?"
  }
];

Celebrity.insertMany(celebritySeed, function() {
  // db.close();
});

Movie.insertMany(movieSeed, function() {});
