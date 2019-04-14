const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const faker = require('faker');

faker.seed(Math.floor(Math.random()*60000));
const occupations = ['actor', 'singer', 'comedian'];
const celebrities = new Array(3).fill({}).map(celebrity => {
  return {
    name: faker.name.findName(),
    occupation: occupations[Math.floor(Math.random()*occupations.length)],
    catchPhrase: faker.company.catchPhrase(),
  };
});

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true});
Celebrity.collection.drop();
Celebrity.insertMany(celebrities)
  .then(() => console.log(`${celebrities.length} celebrities inserted`))
  .catch(err => console.error(err))
  .then(() => mongoose.connection.close());