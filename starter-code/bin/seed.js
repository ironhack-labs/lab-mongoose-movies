const mongoose = require('mongoose')
const Celeb = require('../models/Celeb')

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo!  "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to Mongo', err)
})

var rawData = [
  {
    name: 'Julia Roberts',
    occupation: 'actress',
    catchPhrase: "live every day like its your first"
  },
  {
    name: 'Tina Turner',
    occupation: 'singer',
    catchPhrase: "simply the best"
  },
  {
    name: 'Thor',
    catchPhrase: "Have you tried turning it off and on again?"
  }
]

Celeb.create(rawData)
.then(() => {
  console.log('Done')
})
.catch((err) => {
  console.log('Error', err)
})