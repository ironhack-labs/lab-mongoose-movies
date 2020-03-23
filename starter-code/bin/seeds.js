const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'mongoose-movies';

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [{
        name: 'David Spade',
        occupation: 'comedian',
        catchPhrase: 'You gotta keep on keepin on.'
    },
    {
        name: 'Jeniffer Aniston',
        occupation: 'actress',
        catchPhrase: 'I am gonna go get one of those job things.'
    },
    {
        name: 'Brad Pitt',
        occupation: 'actor',
        catchPhrase: 'I could either watch it happen or be part of it.'
    }
];

Celebrity.create(celebrities, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});