require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: 'Morty Smith',
    occupation: 'Student at Harry Herpson High School',
    catchPhrase: 'Oh jeez!'
  },
  {
    name: 'Rick Sanchez',
    occupation: 'Mad scientist',
    catchPhrase: 'Wubbalubbadubdub!'
  },
  {
    name: 'Snuffles',
    occupation: 'Leader of the intergalactic dogs organization',
    catchPhrase: 'Where are my testicles Summer?'
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close();
});

