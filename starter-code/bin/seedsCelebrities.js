require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = process.env.DBURL;
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});

const celebrities = [
  {
    name: 'Homer',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Homer`
  },
  {
    name: 'Chiwetel Ejiofor',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Chiwetel`
  },
  {
    name: 'Bill Skarsgård',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Bill`
  },
  {
    name: 'Jennifer Lawrence',
    occupation: 'Actress',
    catchPhrase: `Hi I'm Jennifer`
  },
  {
    name: 'Meryl Streep',
    occupation: 'Actress',
    catchPhrase: `Hi I'm Meryl`
  },
  {
    name: 'Daniel Craig',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Daniel`
  }
]

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close()
});