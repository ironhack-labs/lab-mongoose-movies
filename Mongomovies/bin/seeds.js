const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const celebrities = [
  {
    name: "Edward Norton",
    occupation: "Actor",
    catchPhrase: "You can't talk about the fightclub",
  },
  {
    name: "Ahmed the dead terrorist",
    occupation: "Toy",
    catchPhrase: "I kill you",
  },
  {
    name: "LouisCK",
    occupation: "Comedian",
    catchPhrase: "The meal does not finish when you are full!",
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(c => console.log(c.name));
  mongoose.connection.close();
});
