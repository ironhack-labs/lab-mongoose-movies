const mongoose = require('mongoose')
const celebrity = require('../models/celebrity')

const dbname = 'movies'
mongoose.connect(`mongodb://localhost/${dbname}`)

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'scientawwluhhhgy'
  },
  {
    name: 'Arnold Schwarzenneger',
    occupation: 'actor',
    catchPhrase: 'GET TO THE ChoPPeR'
  },
  {
    name: 'Vin Diesel',
    occupation: 'actor',
    catchPhrase: 'It doesnt matter if you win by an inch or a mile, winning is winning'
  }
]

celebrity.create(celebrities)
  .then(celebrities =>{
    console.log(`${celebrities.length}`)
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log('something went wrong' + err)
  })

