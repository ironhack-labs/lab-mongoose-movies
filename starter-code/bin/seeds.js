const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
  .connect('mongodb://localhost/labMovies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const seedData = [
  {
    name: 'Anna',
    occupation: 'Teacher',
    catchPhrase: 'You should study more!'
  },
  {
    name: 'Lucas',
    occupation: 'Backend Dev',
    catchPhrase: `It's simple!`
  },
  {
    name: 'Filipe',
    occupation: 'Project manager',
    catchPhrase: 'Oxi, faz aí!'
  }
]

Celebrity.create(seedData)
  .then(data => {
    console.log('Data added to the database:', data);
    mongoose.connection.close();
  })
  .catch(err => { throw new Error(err) });