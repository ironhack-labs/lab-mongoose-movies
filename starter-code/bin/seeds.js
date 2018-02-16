const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies');

const celebrityData = [
  {
    name: 'Will Smith',
    occupation: 'Actor',
    catchPhrase: 'Big Willy Style',
  },
  {
    name: 'Oprah',
    occupation: "Gettin' money",
    catchPhrase: 'You get a car, you get a car...',
  },
  {
    name: 'Emma Stone',
    occupation: 'Actress',
    catchPhrase: 'HARRRYYYY',
  },
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) throw err;
  mongoose.connection.close();
});
