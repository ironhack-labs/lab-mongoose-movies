const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'data'
mongoose.connect('mongodb://localhost/data')

// const celebrities =[
//   {
//     name: 'Brad Pitt',
//     occupation: 'Actor',
//     catchPhrase: 'Hello my friend, Im Brad Pitt'
//   },
//   {
//     name: 'John Lennon',
//     occupation: 'Musician',
//     catchPhrase: 'Imagine all the people...'
//   },
//   {
//     name: 'Eddie Murphy',
//     occupation: 'Comedian',
//     catchPhrase: 'Hehehe hello everybody!'
//   }
// ]

// Celebrity.create(celebrities, (err)=>{
//   if(err) throw(err)
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// })

const movies =[
  {
    title: 'AAAAAA',
    genre: 'Drama',
    plot: 'Things'
  },
  {
    title: 'words',
    genre: 'comedy',
    plot: 'noooo'
  },
  {
    title: 'movie',
    genre: 'very sad',
    plot: ':('
  }
]

Movie.create(movies, (err)=>{
  if(err) throw(err)
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
})