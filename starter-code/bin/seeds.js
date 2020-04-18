const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const DB_NAME = 'movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Chuck Norris',
    occupation: 'actor',
    catchPhrase:'Chuck Norris can pick oranges from an apple tree and make the best lemonade you have ever tasted.'
  },
  {
    name: 'Jimmy Fallon',
    occupation:'comedian',
    catchPhrase:'Thank you… fat dude with giant headphones on the subway, for looking like what would’ve happened if Jabba the Hutt mated with Princess Leia.'
  },
  {
    name: 'Bill Gates',
    occupation: 'software developer',
    catchPhrase: 'Be nice to nerds. Chances are you’ll end up working for one.'
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});