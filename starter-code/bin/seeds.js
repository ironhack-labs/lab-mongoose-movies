const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const list = [
    {
        name: 'Tom Holland',
        occupation: 'Spider-Man',
        catchPhrase: 'Web web bitch'
    },
    {
        name: 'Robert Downey Jr',
        occupation: 'Iron Man',
        catchPhrase: 'I am Iron Man'
    },
    {
        name: 'Steve Carell',
        occupation: 'Regional Manager',
        catchPhrase: "That's what she Said"
    }
]


mongoose
  .connect('mongodb://localhost/Celebrity-List', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))

  

  .catch(err => console.error('Error connecting to mongo', err));



  Celebrity.create(list)
