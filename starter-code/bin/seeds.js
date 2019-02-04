const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = 'starter-code';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Tom Cruiser',
    occupation: 'Actor',
    catchPhrase: 'Cientology'
  },
  {
    name: 'Joe',
    occupation: 'actor',
    catchPhrase: 'How you doin?'
  },
  {
    name: 'Sheldon',
    occupation: 'physic',
    catchPhrase: 'Bazinga'
  }];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err);
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
