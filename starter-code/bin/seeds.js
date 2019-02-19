const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

mongoose.connect(`mongodb://localhost/celebrity-db`);


const celebrities = [
  {
    name: 'Tom Hanks',
    occupation: 'Actor',
    catchPhrase: "There's a snake in my boot"
  },
  {
    name: 'Barack Obama',
    occupation: 'President',
    catchPhrase: 'Intercepted'
  },
  {
    name: 'Donald Trump',
    occupation: 'Celebrity Apprentice',
    catchPhrase: 'Believe me'
  }
];


Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});
