const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model')

const celebrities = [
    {
        name: 'YumYum',
        ocupation: 'Lamberjack cat',
        catchPhrase: 'YumYum owns you all!'
    },
    {
        name: 'Vegeta',
        ocupation: 'Sayajin warrior',
        catchPhrase: 'You insignificant worm!'
    },
    {
        name: 'Light Yagami',
        ocupation: 'Student, terrorrist, serial killer',
        catchPhrase: 'I\'ll be the god of the new world.'
    }
]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.create(celebrities)
    .then(() => {
        console.log('Celebrities added to database.');

        mongoose.connection.close()
    })
    .catch(err => console.log(error))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
