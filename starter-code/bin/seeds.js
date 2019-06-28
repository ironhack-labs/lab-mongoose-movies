const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Hello there'
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'The most alluring thing a woman can have is confidence'
  },
  {
    name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: "I'm so crazy"
  }
]

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
Celebrity.create(celebrities)
.then(celebrities => {
  console.log(celebrities)
  mongoose.connection.close()
})
.catch(err => {
  console.log(err)
  mongoose.connection.close()
})