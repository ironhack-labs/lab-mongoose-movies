const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose
  .connect('mongodb://localhost/movies', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const celebrities = [
  { name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'crazy in love'
  },

  { name: 'Cate Blanchet',
    occupation: 'actress',
    catchPhrase: 'Blue Jasmine'
  },

  { name: 'Johnny Depp',
    occupation: 'actor',
    catchPhrase: 'Edward Scissorhands'
  }
];

Celebrity.create(celebrities)
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
  });
