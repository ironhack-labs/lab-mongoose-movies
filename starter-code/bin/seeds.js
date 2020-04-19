const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')
const mongoose = require('mongoose')

// const mockData = [
//   {
//     name: 'Lana Del Rey',
//     occupation: 'Singer',
//     catchPhrase: 'Live fast. Die young. Be wild. Have fun.',
//   },
//   {
//     name: 'Florence Welch',
//     occupation: 'Singer',
//     catchPhrase: 'Maybe I’ve always been more comfortable in chaos.”',
//   },
//   {
//     name: 'Kaya Scodelario',
//     occupation: 'Actress',
//     catchPhrase: "I wasn't good at anything very much at school, but I did like drama",
//   },
//]

const mockData = [
  { title: 'The lord of the rings', genre: 'Fantasy?', plot: 'Two hobbits one ring :)' },
  { title: 'Star Wars ', genre: 'Sci-fi', plot: 'R2D2 must never die' },
  { title: 'Disturbia', genre: 'Action', plot: 'One guy tries not to die' },
]

// mongoose
//   .connect('mongodb://localhost/celebrities', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     Celebrity.create(mockData).then((res) => console.log('Data loaded'))
//   })

//   .catch((err) => {
//     console.error('Error connecting to mongo', err)
// })

mongoose
  .connect('mongodb://localhost/movies', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Movie.create(mockData).then((res) => console.log('Data loaded'))
  })

  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })
