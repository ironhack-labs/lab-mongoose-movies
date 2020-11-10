// bin/seeds.js
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const DB_NAME = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const celebrities = [
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: 'I\'ll be back',
  },
  {
    name: 'Sylvester Stallone',
    occupation: 'Actor',
    catchPhrase: 'Yoo, Adrian!',
  },
  {
    name: 'Dark Helmet',
    occupation: 'Darth Vader Wannabe',
    catchPhrase: 'Evil will always triumph because good is dumb',
  },

];

Celebrity.create(celebrities)
  .then(allCelebs => {
    console.log(`Created ${allCelebs.length} celebrities`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));