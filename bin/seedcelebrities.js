const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbTitle = 'celebrities';
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect(`mongodb://localhost/${dbTitle}`);

const celebrities = [
  {
    name: 'Iron Man',
    occupation: 'Billionarie, philanthropist',
    catchPhrase: 'Genius, billionaire, playboy, philanthropist',
    movies: [{ type: ObjectId, ref: 'Movie' }],
  },
  {
    name: 'StarLord',
    occupation: 'Bounty hunter',
    catchPhrase: 'You said it yourself, bitch! We\'re the Guardians of the Galaxy!',
    movies: [{ type: ObjectId, ref: 'Movie' }],
  },
  {
    name: 'Wolverine',
    occupation: 'Badass',
    catchPhrase: 'Go fuck yourself, pretty boy!',
    movies: [{ type: ObjectId, ref: 'Movie' }],
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities.`);
  mongoose.connection.close();
});
