const initialCelebrities = [
  {
    name: 'Monkey D. Luffy',
    occupation: 'Captain',
    catchPhrase: "I'm going to be the king of pirates!",
  },
  {
    name: 'Roronoa Zoro',
    occupation: 'Vice-captain',
    catchPhrase: 'Ahn?',
  },
  {
    name: 'Vinsmoke Sanji',
    occupation: 'Chef',
    catchPhrase: 'All blue!',
  },
];

const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

const dbName = 'starter-code';

mongoose.connect(`mongodb://localhost/${dbName}`);

Celebrity.create(initialCelebrities, (err) => {
  if (err) {
    throw (err);
  } else {
    console.log(`Created ${initialCelebrities.length} celebrities`);
  }
  mongoose.connection.close();
});
