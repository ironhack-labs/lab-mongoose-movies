const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Leonardo DiCaprio",
    occupation: "actor",
    catchPhrase: "Families are always rising or falling in America, am I right?",
  },
  {
    name: "Matt Damon",
    occupation: "actor",
    catchPhrase: "Oh fuck you! Go save a kitten in a tree fuckin queers!",
  },
  {
    name: "Jack Nicholson",
    occupation: "actor",
    catchPhrase: "Nobody gives it to you you have to take it.",
  },
  {
    name: "Marc Wahlberg",
    occupation: "actor",
    catchPhrase: "Whoopdee-fuckin-doo.",
  }
]

Celebrity.deleteMany()
  .then(() => Celebrity.create(celebrities))
  .then(booksDocuments => {
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => {throw(err)})


  const movies = [
    {
      name: "The Departed",
      genre: "action",
      plot: "Boston mafia film set in the 80s.",
    },
    {
      name: "Catch Me If You Can",
      genre: "drama",
      plot: "True story of Frank Abignale.",
    }
  ]
  
  Movie.deleteMany()
    .then(() => Movie.create(movies))
    .then(booksDocuments => {
      console.log(`Created ${movies.length} movies`)
      mongoose.connection.close()
    })
    .catch(err => {throw(err)})