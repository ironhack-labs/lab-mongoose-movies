require('dotenv').config();

const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const celebrity = [
  {
    name: 'Michael Jackson',
    occupation: 'Singer',
    catchPhrase: `They don't really care about us`
  },
  {
    name: 'Malala',
    occupation: 'Activist',
    catchPhrase: `When someone takes away your pens you realize quite how important education is.`
  },
  {
    name: 'WesBoss',
    occupation: 'Developer',
    catchPhrase: `I'm Wes Bos, Ask Me Anything!`
  }
]

mongoose.connect(process.env.DB, { useNewUrlParser: true })

Celebrity.create(celebrity)
  .then(celebrity => {
    console.log('IT WORKS', celebrity)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
    mongoose.connection.close()
  })