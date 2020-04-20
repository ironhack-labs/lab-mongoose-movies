const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect(`mongodb://localhost/3000`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Clint Eastwood',
    ocupation: 'actor, director',
    catchPhrase: 'Go ahead... Make my day, punk!'
  },
  {
    name: 'Arnold Schwarzenegger',
    ocupation: 'actor',
    catchPhrase: "I'll be back!"
  },
  {
    name: 'Robert De Niro',
    ocupation: 'actor',
    catchPhrase: "You talkin' to me?"
  },
  {
    name: 'Bruce Willis',
    ocupation: 'actor',
    catchPhrase: "Yippee-Ki-Yay, Motherfucker!"
  }
];

Celebrity.create(celebrity, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});