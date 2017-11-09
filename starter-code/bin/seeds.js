const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', {useMongoClient: true});
const Celebrities = require('../models/celebrity');

const dateCelebrities = [
  {
    name: 'Pepito Grillo',
    occupation: 'vividor 1',
    catchPhrase: 'http://i.imgur.com/XtpFrW7.jpg',
  },
  {
    name: 'Monolito',
    occupation: 'vividor 2',
    catchPhrase: 'http://i.imgur.com/XtpFrW7.jpg',
  },
  {
    name: 'Ruterillo',
    occupation: 'vividor 3',
    catchPhrase: 'http://i.imgur.com/XtpFrW7.jpg',
  }
];

Celebrities.collection.drop();

Celebrities.create(dateCelebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((dateCelebrities) => {
    console.log(dateCelebrities.name);
  });

  mongoose.connection.close();
});
