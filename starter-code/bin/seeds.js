require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')

mongoose.connect(process.env.DB)

//celebrities
const celebrities = [
  {
    name: 'Robert Downey Jr',
    occupation: 'Actor',
    catchPhrase: 'Acting is always a challenge.'
  },
  {
   name: 'Chris Evans',
   occupation: 'Actor',
   catchPhrase: 'Everything that Marvel does, it s a chess move. Nothing is by accident.' 
  },
  {
    name: 'Chris Pratt',
    occupation: 'Actor',
    catchPhrase: 'The only way physical comedy works is if you dont see it coming'
  }
]




Celebrity.create(celebrities)
  .then(celebrities=>{
    console.log(`Created ${celebrities.length} celebrities successfully`);
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log(err)
  })

  //movies

const movies = [
  {
    title: 'Iron Man',
    genre: 'Action',
    plot: 'SuperHero Movie'
  },
  {
    title: 'Captain America',
    genre: 'Action',
    plot: 'SuperHero Movie'
  },
  {
    title: 'Guardians of the galaxy',
    genre: 'Action',
    plot: 'SuperHero Movie'
  }
]


Movie.create(movies)
  .then(movies => {
    console.log(`Nice! You've created ${movies.length} new movies.`)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))