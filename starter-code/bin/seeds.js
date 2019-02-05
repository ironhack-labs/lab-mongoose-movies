const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Narcisa',
    occupation: 'Rich',
    catchPhrase: 'Ai, que loucura!'
  },
  {
    name: 'Deborah Secco',
    occupation: 'Actress',
    catchPhrase: 'Ai, que gostosa!'
  },
  {
    name: 'Karol Conka',
    occupation: 'Singer',
    catchPhrase: 'Ai, que delicia!'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
