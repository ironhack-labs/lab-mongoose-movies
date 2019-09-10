const mongoose = require('mongoose');
const Movie  = require('../models/Movie')
/*
const Celebrity = require('../models/Celebrity')

const celebrity = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'I am a stupid white guy'
  },
  {
    name: 'Steven Tyler',
    occupation: 'Singer',
    catchPhrase: 'Every life has a measure of sorrow, and sometimes this is what awakens us.'
  },
  {
    name: 'Louis CK',
    occupation: 'Comedian',
    catchPhrase: 'You’ll be fine. You’re 25. Feeling [unsure] and lost is part of your path. Don’t avoid it. See what those feelings are showing you and use it. Take a breath. You’ll be okay. Even if you don’t feel okay all the time.'
  },
  {
    name: 'Kim Kardashian',
    occupation: 'Unknown',
    catchPhrase: 'When there are so many haters and negative things, I really don’t care.'
  }
]

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
  .then(async () => {
    const celebrityList = await Celebrity.create(celebrity);
    console.log(`${celebrityList.length} celebrities created.`)
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
  */

  const movies = [
    {
      title: 'Kill Bill',
      genre: 'Drama',
      plot: 'The bride looking for vengance BLOOOOOOOOOOOOOOD!!!'
    },
    {
      title: 'Kill Bill Vol. 2',
      genre: 'Drama',
      plot: 'The same bride looking for more vengance BLOOOOOOOOOOOOOOOOOOOOOOOOOD!!! RELOADED'
    }
  ]

 mongoose
 .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
 .then(async () => {
   const movieList = await Movie.create(movies);
   console.log(`${movieList.length} movies created.`)
   mongoose.connection.close();
 })
 .catch((err) => {
   console.log(err);
 })