const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity'); 

const celebrities = [
  {
    name: 'Samuel L. Jackson',
    occupation: 'actor',
    catchPhrase: 'And you will know my name is the Lord when I lay my vengeance upon thee.'
  },
  {
    name: 'Whitney Houston',
    occupation: 'singer',
    catchPhrase: 'Crack is whack'
  },
  {
    name: 'Michael Jordan',
    occupation: 'professional athlete',
    catchPhrase: 'I\'ve never lost a game I just ran out of time.'
  }
]

mongoose
  .connect('mongodb://localhost/celebrity-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

celebrities.forEach(celebrity => {
  Celebrity.create(celebrity)
  .then((celebrity) => console.log(`Added celebrity: ${celebrity.name}`))
  .catch((error) => console.log('An error happened while saving a celebrity: ', error));
})
