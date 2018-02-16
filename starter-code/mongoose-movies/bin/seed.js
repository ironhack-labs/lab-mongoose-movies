const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-dev');

const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name        : 'Mosi Rivera Serra',
    occupation  : 'Smart Person',
    catchPhrase : 'Read a book'
  },
  {
    name        : 'Alek Rivera Serra',
    occupation  : 'Smart Person',
    catchPhrase : 'Tu mai es la gorda'
  },
  {
    name        : 'Joel Rivera Garcia',
    occupation  : 'Social Butterfly',
    catchPhrase : 'Eso.. no.. se hace!'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err
  }
  mongoose.connection.close();
});