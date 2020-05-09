const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const DB_TITLE = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const data = [
  {
    name: 'Kim K',
    occupation: 'influencer',
    catchPhrase: 'Hello, it is me!'
  },
  {
    name: 'Barack Obama',
    occupation: 'President',
    catchPhrase: 'Hello, it is me!'
  },
  {
    name: 'Chris Pratt',
    occupation: 'Actor',
    catchPhrase: 'Hello, it is me!'
  }
];


Celebrity.create(data, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${data.length} celebrities`);
  mongoose.connection.close();
});