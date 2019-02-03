const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

const dbName = 'starter-code';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebritys = [{
  name: 'Albert Einstein',
  occupation: 'Physicist',
  catchPhrase: 'If you want to live a happy life, tie it to a goal, not to people or objects.'
},
{
  name: 'Anthony Robbins',
  occupation: 'Writer',
  catchPhrase: 'If you can\'t you must, and if you must you can.'
},
{
  name: 'Tom Cruise',
  occupation: 'Actor',
  catchPhrase: 'I\'m an all-or-nothing kind of person, and when I become interested in something, I give it my all'
}
];

Celebrity.create(celebritys, (err) => {
  if (err) {
    throw (err);
  }
  console.log(`Created ${celebritys.length} celebritys`);
  mongoose.connection.close();
});
