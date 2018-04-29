const mongoose = require('mongoose')
// const myCelebs = require('../models/celebrity')
const myMovies = require('../models/movies')
mongoose.connect('mongodb://localhost/celebrity')


// const celebArray = [
//   {
//     name: "Michael Jordan",
//     occupation: "G.O.A.T",
//     catchphrase: "I am the best",
    
//   },
//   {
//     name: "Arnold",
//     occupation: "Actor",
//     catchphrase: "Ill be back",
//   },
//   {
//     name: "Actor Name",
//     occupation: "Actor",
//     catchphrase: "Catchphrase",

//   }

  
// ]

const movieArray = [
  {
    title: "scary",
    genre: "scary",
    plot: "scary",
    
  },
  {
    title: "comedy",
    genre: "comedy",
    plot: "comedy",
  },
  {
    title: "suspense",
    genre: "suspense",
    plot: "suspense",

  }

  
]

myMovies.create(movieArray, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movieArray.length} movies`)
  mongoose.connection.close()
});



