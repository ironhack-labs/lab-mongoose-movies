const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const firstCelebs = [
  {
    name: 'Tom Hanks', 
    occupation: "actor",
    catchPhrase: "Wilson!!",
  },
  {
    name: 'Sting', 
    occupation: "musician",
    catchPhrase: "Englishman in NY",
  },
  {
    name: "Martin Scorcese", 
    occupation: "film director",
    catchPhrase: "Deniro is my pal",
  }
]

Celebrity.create(firstCelebs)
  .then(celebsCreated => {
    console.log(`Created ${celebsCreated.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`This is the error: ${err}`))