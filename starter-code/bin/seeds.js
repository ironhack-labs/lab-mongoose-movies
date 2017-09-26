const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-development', {useMongoClient: true});
const Celebrity = require('../models/celebrity.js');

const celebrities = [
  {
    name: 'Will Ferrell',
    occupation: 'Actor',
    catchPhrase: 'Stay Classy San Diego',
  },
  {
    name: 'Conor Mcgregor',
    occupation: 'Mixed MartiaL Arts Figther',
    catchPhrase: 'We are here to take part, we are here to take over',

  },
  {
    name: 'Mike Tyson',
    occupation: 'Boxer',
    catchPhrase: 'I am the best ever',
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});
