const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require("../models/movie.model")

const dbName = 'celebrity-app-webmad1019';


mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Mr. PoopyButtHole",
    occupation: "Teacher",
    catchPhrase: "OOOWEE",
  },
  {
    name: "Mr. Meeseeks",
    occupation: "Helper",
    catchPhrase: "I'm Mr. Meeseeks, look at me!",
  },
  {
    name: "Birdperson",
    occupation: "Terrorist",
    catchPhrase: "Tammy!!",
  },
]

const movies = [
  {
    title: "Rixty Minutes",
    genre: "Sci-fi",
    plot: "Rick and Morty watch cable from other dimensions",
  },
  {
    title: "Meeseeks and Destroy",
    genre: "Sci-fi",
    plot: "Mr. Meeseeks box",
  },
  {
    title: "The Ricks Must Be Crazy",
    genre: "Sci-fi",
    plot: "Rick and Morty go inside Rick's microverse car battery",
  },

]


Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});