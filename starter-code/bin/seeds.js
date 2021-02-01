const mongoose = require('mongoose');
const User = require('../models/Celebrity.model');

require('../configs/db.config');

const celebrityUsers = [
  {
    name: 'Katarina',
    occupation: 'actress',
    catchPhrase: 'You catch me baby!'
  },
  {
    name: 'Arnold',
    occupation: 'actor',
    catchPhrase: 'Asta la vista baby!'
  },
  {
    name: 'Vanessa',
    occupation: 'movieMaker',
    catchPhrase: 'Do it now bro!'
  }
];

User.create(celebrityUsers)
  .then(dbUsers => {
    console.log(`Created ${dbUsers.length} users`);
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error occurred while creating fake users in the DB: ${err}`));