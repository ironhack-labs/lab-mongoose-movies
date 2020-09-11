const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const celebrities = [
  {
    name: 'Leonardo Mezzanotti',
    occupation: 'actor',
    catchPhrase: 'Pamonhas fresquinhas',
  },
  {
    name: 'Emanuele Mezzanotti',
    occupation: 'singer',
    catchPhrase: 'Neguinho da nega',
  },
  {
    name: 'Clara Mezzanotti',
    occupation: 'comedian',
    catchPhrase: 'Tik tok tik tok',
  },
];

mongoose
  .connect('mongodb://localhost/lab-movies-ironhack', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    Celebrity.insertMany(celebrities)
      .then(celebs => {
        console.log(`Inserted ${celebs.length} celebrities`);

        mongoose.connection.close();
      })
      .catch(error => console.log(error));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
