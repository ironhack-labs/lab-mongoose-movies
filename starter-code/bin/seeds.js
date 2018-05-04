const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Celebrity = require('../models/celebrity-model');

mongoose.connect('mongodb://localhost/celebritiesREAL');

const celebritySchema = new Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

const celebritiesArray = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Show me the money!',
  },
  {
    name: 'Kanye West',
    occupation: 'Rapper',
    catchPhrase: 'I am a god!',
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'Single ladies',
  },
];

Celebrity.create(celebritiesArray, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebritiesArray.length} celebrities`);
  mongoose.connection.close();
});
