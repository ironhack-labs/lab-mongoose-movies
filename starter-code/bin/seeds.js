const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true});

const celebrities = [
  {
    name: 'Lionel Messi',
    occupation: 'God',
    catchPhrase: 'Goal!'
  },
  {
    name: 'Zooey Deschanel',
    occupation: 'Actress',
    catchPhrase: 'Summer has always been my favorite season, i feel happier.'
  },
  {
    name: 'Ricky Gervais',
    occupation: 'Actor, comedian',
    catchPhrase: 'When you are dead, you do not know you are dead, it is only painful and difficult for others. The same applies when you are stupid.'
  }
]

Celebrity.create(celebrities)
  .then(celebrities => {
    console.log(`There were ${celebrities.length} celebrity documents added to de database`);
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(`There has been an error creating the database: ${err}`)
  });