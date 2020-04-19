require('dotenv').config()

// const Celebrity = require('../models/Celebrity')
// const mongoose = require('mongoose')

// const mockData = [
//   {
//     name: 'Matthew Mcconaughey',
//     occupation: 'Actor',
//     catchPhrase: 'All right, All right, All right',
//   },
//   {
//     name: 'Forest Gump',
//     occupation: 'Entreprenuer',
//     catchPhrase: 'Life is like a box of chocolates',
//   },
//   {
//     name: 'Zoolander',
//     occupation: 'Model',
//     catchPhrase: `The Derek Zoolander Center for Kids Who Can't Read Good and Who Wanna Learn to Do Other Stuff Good Too`,
//   },
// ]

// mongoose
//   .connect('mongodb://localhost/celebrities', { useNewUrlParser: true })
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     const celebritiesCreated = Celebrity.create(mockData)
//     const { length } = celebritiesCreated
//     console.log(`${length} celebrities created`)
//   })
//   .catch((err) => {
//     console.error('Error connecting to mongo', err)
//   })

const Movie = require('../models/Movie')
const mongoose = require('mongoose')

const mockData = [
  {
    title: 'Forest Gump',
    genre: 'Drama',
    plot: 'Stupid is as sutpid does',
  },
  {
    title: 'Inception',
    genre: 'Drama/Action',
    plot: 'Dreams are crazy',
  },
  {
    title: 'Zoolander',
    genre: 'Comedy',
    plot: `Models are people too`,
  },
]

mongoose
  .connect('mongodb://localhost/movies', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    const celebritiesCreated = Movie.create(mockData)
    const { length } = celebritiesCreated
    console.log(`${length} movies created`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })
