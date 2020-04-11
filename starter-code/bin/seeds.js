// bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect(`mongodb://localhost/movies-project`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebArray = [
    {
        name: 'Peter Pan',
        occupation: 'Pilot',
        catchPhrase: 'Never grew up'
    },
    {
        name: 'Dory II',
        occupation: 'Psychiatrist',
        catchPhrase: 'Who are you and where?'
    },
    {
        name: 'Bruce Willis',
        occupation: 'Actor',
        catchPhrase: 'I\'m not the Hasta-la-Vista-Guy!'
    }
]

// create entries after running seeds.js
Celebrity.create(celebArray).then(() => {
    console.log(`Created ${celebArray.length} celebArray`);
    mongoose.connection.close();
  });
