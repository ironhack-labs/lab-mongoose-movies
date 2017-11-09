const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies-dev', {useMongoClient: true});

const Celebrity = require('../models/celebrity');

Celebrity.collection.drop();

const celebrities = [
  {
    name       : "David Prowse",
    occupation : "Actor",
    catchPhrase : "I am your father",
  },
  {
    name       : "Super ñoño",
    occupation : "Superheroe",
    catchPhrase : "Con el ensobine",
  },
  {
    name       : "Martes y Trece",
    occupation : "Comedian",
    catchPhrase : "Encarnaaa",
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err){throw err;}
  console.log("Celebrities created.");

  mongoose.connection.close();
});
