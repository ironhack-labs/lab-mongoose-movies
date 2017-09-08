const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const {dbURL} = require('../config/db');
mongoose.connect(dbURL, {useMongoClient: true});

const celebrity = [
  {
    name: 'Tom Cruise',
    ocupation: 'Actor',
    cathPhrase: 'Hello baby!'
  },
  {
    name: 'Beyonce',
    ocupation: 'singer',
    cathPhrase: 'All the single ladies'
  },
  {
    name: 'John Snow',
    ocupation: 'Knows nothing',
    cathPhrase: 'Winter is comming'
  }
];


Celebrity.create(celebrity, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(c => console.log(c.name));
  mongoose.connection.close();
});
