const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const faker = require('faker');

faker.seed(Math.floor(Math.random()*60000));
const occupations = ['actor', 'singer', 'comedian'];

const celebrities = new Array(3).fill(0).map(celebrity => {
  return {
    name: faker.name.findName(),
    occupation: occupations[Math.floor(Math.random()*occupations.length)],
    catchPhrase: faker.company.catchPhrase(),
  };
});
const movies = new Array(10).fill(0).map(movie => {
  return {
    title: faker.random.words(Math.floor(Math.random()*(6-3) + 6)),
    genre: faker.random.word(),
    plot: faker.random.words(Math.floor(Math.random()*(36-25) + 25)),
  };
});



mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true});

Celebrity.deleteMany({})
  .then((val) => console.log('Celebrities removed!'))
  .catch(err => console.error(err));

Movie.deleteMany({})
  .then((val) => console.log('Movies removed!'))
  .catch(err => console.error(err));

Celebrity.insertMany(celebrities)
  .then(() => Movie.insertMany(movies))
  .then(() => mongoose.connection.close());