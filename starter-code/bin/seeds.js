const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mong-movies', {useMongoClient: true});
const Celebrities = require('../models/celebrities');

const famosos = [
  {
    name  : "AnaJules",
    occupation : "Professional stretcher",
    catchPhrase : "Que Ladilla",
  },
  {
    name  : "Tess",
    occupation : "GoogleDev",
    catchPhrase : "Cuantos tapers",
  },
  {
    name  : "ManuDP",
    occupation : "Professional bread taster",
    catchPhrase : "Me flipa el pan",
  }
];

Celebrities.create(famosos, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});
