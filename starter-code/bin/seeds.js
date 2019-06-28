const mongoose = require('mongoose')
const Celebs = require('../models/Celeb')
const Movie = require('../models/Movie')

const celebs = [
  {
    name: 'Mclovin',
    occupation: 'student',
    catchPhrase: 'I am Mclovin'
  },
  {
    name: 'Luis Miguel ',
    occupation: 'singer',
    catchPhrase: 'soy el Sol '
  },
  {
    name: 'Angelina Jolie',
    occupation: 'Actriz',
    catchPhrase: 'Adopta al negrito'
  }
]

mongoose.connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
const createCelebs = Celebs.create(celebs)
  .then(celebs => {
    console.log('data created', celebs)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
    mongoose.connection.close()
  })
