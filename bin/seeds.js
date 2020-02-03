const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'lab-mongoose&express-movies';

mongoose
  .connect('mongodb://localhost/lab-mongoose&express-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const celebrities = [
      {
          name: 'Daniel Craig',
          occupation: 'Actor/Actress',
          catchPhrase: "The name is Bond. James Bond."
      },
      {
          name: 'Jay-Z',
          occupation: 'Singer',
          catchPhrase: "I got 99 problems but a bitch ain't one!"
      },
      {
          name: 'Chris Rock',
          occupation: 'Comedian',
          catchPhrase: 'What you want, a cookie?!'
      }
  ];

  Celebrity.create(celebrities, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${celebrities.length} celebrity files`);
    mongoose.connection.close();
  });