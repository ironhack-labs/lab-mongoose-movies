const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebArray = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Danger Zone',
  },
  {
    name: 'Gillian Flynn',
    occupation: 'author',
    catchPhrase: 'Does anyone do anything profusely except apologize? Sweat, I guess.',
  },
  {
    name: 'Frank Herbert',
    occupation: 'author',
    catchPhrase: 'The spice must flow',
  },
];

Celebrity.create(celebArray, () => {
  console.log('celebrity created');
});
