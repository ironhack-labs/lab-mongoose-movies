require('dotenv').config();

const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

const movies = [
  {
    title: 'Toy Story 4',
    genre: 'Family',
    plot: `Woody (voice of Tom Hanks) has always been confident about his place in the world, and that his priority is taking care of his kid, whether that's Andy or Bonnie.`
  },
  {
    title: 'Aladdin',
    genre: 'Family',
    plot: `A street rat frees a genie from a lamp, granting all of his wishes and transforming himself into a charming prince in order to marry a beautiful princess. But soon, an evil sorcerer becomes hell-bent on securing the lamp for his own sinister purposes.`
  },
  {
    title: 'Avengers END GAME',
    genre: 'Action',
    plot: `The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, "Avengers: Endgame."`
  }
]

mongoose.connect(process.env.DB, { useNewUrlParser: true })


Movie.create(movies)
  .then(movies => {
    console.log('IT WORKS (MOVIES)', movies)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
    mongoose.connection.close()
  })