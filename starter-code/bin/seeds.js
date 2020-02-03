require('dotenv').config()
const Celebrity = require('../models/celebrity')

const celebrities = [
  {
    name: 'Michael Jackson',
    occupation: 'Singer',
    catchPhrase: 'Hee hee'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'Futbolist',
    catchPhrase: 'Siuuuuuu'
  },
  {
    name: 'Brad Pitt',
    occupation: 'Actor',
    catchPhrase: 'To win something, you have to lose something'
  }
]

module.exports(Celebrity, celebrities)