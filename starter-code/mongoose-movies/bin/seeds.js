const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: "Jennifer Aniston",
    occupation: "actress",
    catchPhrase: "Sometimes you win, sometimes you learn",
  },
  {
    name: "Winona Rider",
    occupation: "actress",
    catchPhrase: "Most of the thing you worry about never happen",
  },
  {
    name: "Elena Anaya",
    occupation: "actress",
    catchPhrase: "Young, wild and free",
  }
];


Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
