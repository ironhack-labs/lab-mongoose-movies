const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

const DB_NAME = 'celebrity-list';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities =[
    {
        name: 'Ana',
        occupation: 'actress',
        catchPhrase: 'Hello'
    },
    {
        name: 'angelina jolie',
        occupation: 'actress',
        catchPhrase: 'Tomb Raider'
    },
    {
        name: 'Chris Pratt',
        occupation: 'actor',
        catchPhrase: 'The Office'
    }
];

Celebrity.create(celebrities, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  });