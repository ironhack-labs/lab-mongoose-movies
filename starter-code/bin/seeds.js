require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/movie');


mongoose.connect(process.env.DBURL, {useNewUrlParser: true});

const movies = [
  {
    title: 'EX machina',
    genre: 'Suspenso',
    plot: 'AI MASTER RACE'
  },
  {
    title: 'Scarface',
    genre: "Drugs",
    plot: 'Race to be king of drugs'
  },
  {
    title: 'Mars',
    genre: 'Adventure',
    plot: 'COLONIZE MARS IS THE WAE!'
  }
]
Movie.collection.drop();


Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});