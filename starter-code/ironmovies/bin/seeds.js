const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/famous-people', {useMongoClient: true});
const Celebrity= require('../models/Celebrity');

const celebData = [
  { name: 'Ronaldo', occupation: 'Player', catchPhrase: 'Siiiiuuuuhhh' },
  { name: 'Puigdemont', occupation: 'Politician', catchPhrase: 'Espanya ens roba' },
  { name: 'Leticia Sabater', occupation: 'unknown', catchPhrase: "El Pepinazo" }
];

Celebrity.create(celebData, (err, docs) => {
  if (err) {
    throw err;
  }

    docs.forEach((celeb) => {
      console.log(celeb.name);
    });
    mongoose.connection.close();
  });
