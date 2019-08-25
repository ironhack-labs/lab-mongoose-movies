const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const Celebrity = require('../models/Celebrity');


const celebritiesArray = [
  { 
    name: 'Anabel',
    occupation: 'Student',
    catchPhrase: 'Hard work pays off'
  },
  { 
    name: 'Adrian',
    occupation: 'Director',
    catchPhrase: 'Night owl'
  },
  { 
    name: 'Mercedes',
    occupation: 'Housewife',
    catchPhrase: 'Patien is the key'
  }
]


Celebrity
        .create(celebritiesArray)
        .then(data => console.log(data))
        .catch(err => console.log('Something whentowrong while creating celebrity'));