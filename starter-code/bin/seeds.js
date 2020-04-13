const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// Create an array of 3 objects


const celebrities = [
    {
        name: 'Gautama Buddha',
        occupation: 'Philosopher',
        catchPhrase: 'Peace comes from within. Do not seek it without.'
    },
    {
        name: 'Oprah',
        occupation: 'Philanthropist',
        catchPhrase:'Turn your wounds into wisdom'
    },
    {
        name: 'Eddie Vedder',
        occupation: 'Artist',
        catchPhrase: 'I knew all the rules but the rules did not know me.'
    }
]
// Call the Celebrity model's create method with the array as argument.

Celebrity.create(celebrities)

// In the create method's callback, display feedback. - HELP: Iteraion 1: 4 onwards