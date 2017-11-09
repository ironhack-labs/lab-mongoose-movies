const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-movie', {useMongoClient: true});

const Celebrity = require('../models/celebrity');

const celebrityData = [
  {
    name: "Clementina",
    occupation: "Administradora",
    catchPhrase: "Nobody cares",
  },
  {
    name: "Clementina2",
    occupation: "Administradora2",
    catchPhrase: "Nobody cares2",
  },
  {
    name: "Clementina3",
    occupation: "Administradora3",
    catchPhrase: "Nobody cares3",
  },
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});
