const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
require("../configs/dbConfig")

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'scientology is GREAT!!'
  },
  {
    name: 'Al Pacino',
    occupation: 'Actor',
    catchPhrase: 'Wooh ahh!'
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'If everything was perfect, you would never learn and you would never grow.'
  },
  {
    name: 'Daffy Duck',
    occupation: 'Duck',
    catchPhrase: "You're despicable!"
  },
];

Celebrity.create(celebrities)
  .then(dbCelebrities => {
    console.log(`Created ${dbCelebrities} celebrities`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating celebrities in the DB: ${err}`)
  );




