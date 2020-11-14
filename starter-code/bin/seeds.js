const mongoose = require('mongoose')
const Celebrity = require('../models/celeb.model')
const Movie = require('../models/movie.model')

const dbName = 'MoviesCRUDLab'

mongoose.connect(`mongodb://localhost/${dbName}`)


// const celebrities = [
//   {
//     name: 'Kris Jenner',
//     occupation: 'momager',
//     catchPhrase: 'You\'re doing amazing sweetie'
//   },
//   {
//     name: 'Bugs Bunny',
//     occupation: 'actor',
//     catchPhrase: 'What\'s up doc?'
//   },
//   {
//     name: 'Beyoncé',
//     occupation: 'queenB',
//     catchPhrase: 'I woke up like this'
//   }
// ]

// Celebrity
//   .create(celebrities)
//   .then(data => {
//     console.log('Data included into database', data.length)
//     mongoose.connection.close()
//   })
//   .catch(err => console.log('There was an error', err))


const movies = [
  {
    title: 'The Tiger, the Queen and the Sofa',
    genre: 'fantasy',
    plot: 'You haven\'t seen cool until you\'ve seen this cool.'
  },
  {
    title: 'The First Breakfast',
    genre: 'thriller',
    plot: 'Who killed the turkey? The big mistery to be solved by the one and only Proffesor Plum'
  },
  {
    title: 'Yisus, Mary and the Lamb',
    genre: 'comedy',
    plot: 'There were two and the one in the middle fell.'
  }
]

Movie
  .create(movies)
  .then(data => {
    console.log('Data included into database', data.length)
    mongoose.connection.close()
  })
  .catch(err => console.log('There was an error', err))
