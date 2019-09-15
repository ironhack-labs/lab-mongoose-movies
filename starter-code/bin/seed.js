const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/celebrity", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebrity = [
  {
    name: "Lady Gaga",
    occupation: "Singer",
    catchPhrase: "Cherry, cherry, boom, boom. 🍒"
  },
  {
    name: "Natalie Portman",
    occupation: "Actor",
    catchPhrase:
      "Smart women love smart men more than smart men love smart women."
  },
  {
    name: "Kobe Bryant",
    occupation: "Former basketball player",
    catchPhrase: "I can’t relate to lazy people."
  }
];

const movie = [
  {
    title: "A Star is Born",
    genre: "Drama",
    plot: "She sings and stuff."
  },
  {
    title: "Black Swan",
    genre: "Drama",
    plot: "She dances and then dies."
  },
  {
    title: "Space Jam 3",
    genre: "Comedy",
    plot: "He plays basketball and saves the planet."
  }
];

function start() {
  Celebrity.deleteMany()
    .then(celebrityDropped => {
      Celebrity.create(celebrity).then(addedCelebrity => {
        Movie.deleteMany().then(movieDropped => {
          Movie.create(movie).then(addedMovie => {
            process.exit(0);
          });
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
}
