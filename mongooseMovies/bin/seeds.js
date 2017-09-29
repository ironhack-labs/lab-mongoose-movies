const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseMovies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Michael',
    occupation: 'Ironhack TA',
    catchPhrase: 'And now... you should create the LOGIC!',
  },
  {
    name: 'Yacine',
    occupation: 'Ironhack TA',
    catchPhrase: 'Repeat after me! req, res! REQ, RES!',
  },
  {
    name: 'Maxence',
    occupation: 'Ironhack TA',
    catchPhrase: 'Is it a beer time? Yes!',
  }
];


Celebrity.create(celebrities, (err, info) => {
  if (err) {
    throw err;
  }

  info.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.disconnect();
});