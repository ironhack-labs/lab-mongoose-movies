const celebrities = [
  {
    name: 'Lucky',
    occupation: 'singer',
    catchphrase: 'Bello',
  },
  {
    name: 'Unlucky',
    occupation: 'comedian',
    catchphrase: 'Yolo',
  },
  {
    name: 'Montasar',
    occupation: 'unknown',
    catchphrase: `I don't expect you to understand this`,
  },
];

const movies = [
  {
    title: 'Juicy Fruit',
    genre: 'speghetti western',
    plot: 'He goes, he sees, he dies.',
  },
  {
    title: 'My monk',
    genre: 'drama',
    plot: 'Look who has a monk!',
  },
  {
    title: 'That guy',
    genre: 'comedy',
    plot: `He's just that guy`,
  },
];

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/starter-code', () => {
  console.log('Connected to DB');
});

const Celebrity = require('../models/Celebrity');

const Movie = require('../models/Movie');

Celebrity.collection.drop();

Movie.collection.drop();

Celebrity.create(celebrities)
  .then(result => {
    console.log(`Created ${result.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });

Movie.create(movies).then(result => {
  mongoose.connection.close();
});
