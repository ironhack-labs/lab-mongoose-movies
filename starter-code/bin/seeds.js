const celebs = [
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "All the single ladies"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Fresh prince of Bel-air"
  },
  {
    name: "Scarlett Johansson",
    occupation: "Actress",
    catchPhrase: "Lost in translation"
  }
];

const movies = [
  {
    title: "MIB",
    genre: "Action",
    plot: "WHAAM, POW, BANG",
  },
  {
    title: "Lucy",
    genre: "Action",
    plot: "Sexy Intelligence",
  },
  {
    title: "The Lion King",
    genre: "Family",
    plot: "Nala dates with Simba",
  }
]

const mongoose = require('mongoose');

mongoose.
connect("mongodb://localhost/lab-mongoose-movies", {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to the database with name: ${x.connections[0].name}`);
})
.catch(err => {
  console.log("Error connecting to MongoDB: ", err);
});

const Celebrity = require('../models/celebrity');

Celebrity.insertMany(celebs).then(celebrity => {
  console.log(`Filled the database with ${celebrity}`);
  mongoose.disconnect();
});

const Movie = require('../models/movie');

Movie.insertMany(movies).then(movie => {
  console.log(`Filled the database with ${movie}`);
  mongoose.disconnect();
});