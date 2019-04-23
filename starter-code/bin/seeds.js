require('dotenv').config()

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

mongoose.connect(process.env.DB)

const celebrities = [
  {
    name: 'Elisha Cultbert',
    occupation: 'Actress',
    catchPhrase: 'I do not know',
    },
  {
    name: 'Angelina Jolie',
    occupation: 'Actress',
    catchPhrase: 'It is probable',
    },
  {
    name: 'Kim Kardashian',
    occupation: 'No idea',
    catchPhrase: 'Nothing to say',
    }
]

Celebrity.create(celebrities)
  .then(movies => {
    console.log(`You have created ${celebrities.length} new celebrities.`)
    mongoose.connection.close()
  }) 
  .catch(err => console.log(err))
