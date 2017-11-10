const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-example-development', {
  useMongoClient: true
});
const Celebrity = require('../models/celebrity');

const celebrities = [{
    name: 'brian',
    occupation: `starboy developer!!! :')`,
    cachePhrase: `coding and more coding`,
  },
  {
    name: 'Tom hans',
    occupation: 'actor',
    cachePhrase: `I have pee!!`,

  },
  {
    name: 'Arnol showseneger!',
    occupation: 'actor',
    cachePhrase: `I'll be back`,

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
