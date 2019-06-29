require('dotenv').config()
const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const celebrities = [
  {
    name: 'Samuel L. Jackson',
    occupation: 'actor',
    catchPhrase: 'motherfucker'
  },
  {
    name: 'Pedro Almodóvar',
    occupation: 'director',
    catchPhrase: 'Saludos'
  },
  {
    name: 'Paola Núñez',
    occupation: 'actress',
    catchPhrase: 'Adiós'
  }
]

mongoose.connect(process.env.DB)

const createCelebrities = Celebrity.create(celebrities)
  .then(results => {
    console.log('Celebrities created')
    mongoose.connection.close()
  })
  .catch(err => {
    console.log('Error creating celebrities', err)
    mongoose.connection.close()
  })
