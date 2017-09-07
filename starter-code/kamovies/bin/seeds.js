const mongoose = require('mongoose')
const Celebrity    = require('../models/Celebrity')
const {dbURL}  = require('../config/db')

mongoose.connect(dbURL, {useMongoClient: true})

const celebrities = [
  {
    name : 'Furgencio',
    occupation : 'Actor',
    catchPhrase : 'Furgencio phrase' 
  },
  {
    name : 'Mauricio',
    occupation : 'Singer',
    catchPhrase : 'Mauricio phrase' 
  },
  {
    name : 'Laureana',
    occupation : 'NiNi',
    catchPhrase : 'Laureana phrase' 
  }
]

Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err }
  docs.forEach(celebrity => console.log(celebrity.name))
  mongoose.connection.close()
})