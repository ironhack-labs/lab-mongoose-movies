const mongoose = require('mongoose');
const Celeberty = require('../models/celeberty');

const dbName = 'celebDB';
mongoose.connect(`mongodb://localhost/${dbName}`);
const celebs = [
  {
    name: 'cam',
    Occupation:'CAAAAM',
    Phrase: 'CAAAAAAM?',
  },
  {
    name: 'cam',
    Occupation:'CAAAAM',
    Phrase: 'CAAAAAAM?',
  },
  {
    name: 'cam',
    Occupation:'CAAAAM',
    Phrase: 'CAAAAAAM?',
  },
]


Celeberty.create(celebs, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebs.length} books`)
  mongoose.connection.close();
});
