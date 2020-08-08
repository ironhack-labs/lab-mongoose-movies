const Celebrity = require('../models/Celebrity.model');
const { config } = require('dotenv');

require ("../config/config.db.js")

const celebrities = [{
    name: 'Jennifer Aniston',
    occupation: 'actress',
    catchPhrase: 'Don’t make plans, make options.'
  },{
    name: 'David Schwimmer',
    occupation: 'actor',
    catchPhrase: 'We were on a break!'
  },{
    name: 'Matt LeBlanc',
    occupation: 'actor',
    catchPhrase: 'How you doin’?'
  },{
    name: 'Ben Stiller',
    occupation: 'actor',
    catchPhrase: 'Have you ever wondered if there was more to life other than being really, really, ridiculously good looking?'
  }
];

Celebrity.create(celebrities)
  .then(dbCelebrity => {
    console.log(`Created ${dbCelebrity.length} users`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating fake users in the DB: ${err}`)
  );