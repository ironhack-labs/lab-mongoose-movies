// bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
        name: "Michael Jordan",
        occupation: "Basketball player",
        catchPhrase: "Some people want it to happen, some wish it would happen, others make it happen"
    },
    {
        name: "Arnold Schwarzenegger",
        occupation: "Actor & politician",
        catchPhrase: "I'll be back"
    },
    {
        name: "Bruce Banner/Hulk",
        occupation: "Superhero",
        catchPhrase: "Hulk smash!"
    }
];

Celebrity.create(celebrities, err => {
    if (err) {
        throw err;
      }
      console.log(`Created ${celebrities.length} celebrities`);
      mongoose.connection.close();
});