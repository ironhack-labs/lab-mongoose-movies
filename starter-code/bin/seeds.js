require('dotenv').config()
require('../config/db.config')
const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')


const seedCelebs = [
  {
    name: 'Kim Kardashian',
    catchPhrase: 'I support my mother'
  },
  {
    name: 'Katy Perry',
    occupation: 'Singer',
    catchPhrase: "You're a firework"
  },
  {
    name: 'Kristen Wiig',
    occupation: 'Actress',
    catchPhrase: "And I'm Dooneese"
  },
]

const seedMovies = [
  {
    title: 'Black Beach',
    genre: 'Drama',
    plot: "Carlos is a businessman who gets a request to intercede on behalf a US engineer in the oil industry who's been kidnapped."
  },
  {
    title: 'The Midnight Sky',
    genre: 'Sci-Fi',
    plot: "This post-apocalyptic tale follows Augustine, a lonely scientist in the Arctic, as he races to stop Sully and her fellow astronauts from returning home to a mysterious global catastrophe."
  },
  {
    title: 'The Trial of the Chicago 7',
    genre: 'Drama',
    plot: "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois."
  },
]

Promise.all([Celebrity.deleteMany(), Movie.deleteMany()])
  .then(() => {
    Celebrity.create(seedCelebs)
      .then((celebrity) => {
        console.log(`${seedCelebs.length} celebs added to the database`);

        Movie.create(seedMovies)
          .then((movie) => {
            console.log(`${seedMovies.length} movies added to the database`);
            mongoose.connection.close();
            console.log("Mongoose disconected")
          })
      })
  })
  .catch((error) => console.log(error))