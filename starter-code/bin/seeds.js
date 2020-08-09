const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.model');

require('../configs/db.config');

// User.collection.drop();

const footballCelebs = [
  {
    name: 'Messi',
    occupation: 'Attacker',
    catchPhrase: 'The best decisions aren’t made with your mind, but with your instinct.'
  },
  {
    name: 'Virgil van Dijk',
    occupation: 'Defender',
    catchPhrase: 'There are always things we can still learn to perfect.'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'Attacker',
    catchPhrase: 'Sou melhor que Messi'
  }
];

Celebrity.create(footballCelebs)
  .then(dbCelebs => {
    console.log(`Created ${dbCelebs.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating fake users in the DB: ${err}`)
  );