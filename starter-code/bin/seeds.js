const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')
const Movies = require('../models/movies')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

//const celebrityData = [
//  {
//    name: 'Jonny Depp',
//    occupation: 'Pirate',
//    catchPhrase: 'Aye Aye captain'
//  },
//  {
//    name: 'Angelina Jolie',
//    occupation: 'Actor',
//    catchPhrase: 'I am a boss'
//  },
//  {
//    name: 'Justin Velez',
//    occupation: 'developer',
//    catchPhrase: 'Wadup Wadup'
//  }
//]
//
//Celebrity.create(celebrityData, (err) => {
//  if (err) {throw(err)}
//  console.log('celebrities created', celebrityData)
//  mongoose.connection.close()
//})

const moviesData = [
    {
      title: 'Iron Man',
      genre: 'Action',
      plot: 'Iron man saves the day'
    },
    {
      title: 'Spider-Man',
      genre: 'super-hero',
      plot: 'Web-slinging around the world'
    },
    {
      title: 'Avengers',
      genre: 'Epic Movie',
      plot: 'Superheroes team up'
    }
  ]
  
  Movies.create(moviesData, (err) => {
    if (err) {throw(err)}
    console.log('movies created', moviesData)
    mongoose.connection.close()
  })