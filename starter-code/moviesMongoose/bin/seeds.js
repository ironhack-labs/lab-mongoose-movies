
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const celebrity = [
  {
    name       : "Tom cruise",
    occupation : "Actor",
    catchPhrase: "Mi vida es mision imposible",
  },
  {
    name       : "Beyonce",
    occupation : "Singer",
    catchPhrase: "bailar bailar bailar",
  },
  {
    name       : "Jlo",
    occupation : "Singer",
    catchPhrase: "La vida es una tombola",
  }
];

Celebrity.create(celebrity, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.name));
  mongoose.connection.close();
});
