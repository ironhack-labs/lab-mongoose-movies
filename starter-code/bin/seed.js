const mongoose = require('mongoose')
const Movie = require('../models/Movie')

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo!  "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to Mongo', err)
})

var rawData = [
  {
    title: 'One Flew Over The Cuckoos Nest',
    genre: 'drama',
    plot: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    title: 'White Chicks',
    genre: 'comedy',
    plot: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    title: 'Goodbye Lenin',
    genre: 'german',
    plot: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  }
]

Movie.create(rawData)
.then(() => {
  console.log('Done')
})
.catch((err) => {
  console.log('Error', err)
})


// var rawData = [
//   {
//     name: 'Julia Roberts',
//     occupation: 'actress',
//     catchPhrase: "live every day like its your first"
//   },
//   {
//     name: 'Tina Turner',
//     occupation: 'singer',
//     catchPhrase: "simply the best"
//   },
//   {
//     name: 'Thor',
//     catchPhrase: "Have you tried turning it off and on again?"
//   }
// ]

// Celeb.create(rawData)
// .then(() => {
//   console.log('Done')
// })
// .catch((err) => {
//   console.log('Error', err)
// })