const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-examples', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrity = [
  {
    name: 'Angel',
    occupation: 'Mucha',
    catchPhrase: '¿Yo amarte? JAJAJAJAJAJAJAJAJAJAJAJAJAJAJA … ok si te amo.',
  },
  {
    name: 'Sirodey',
    occupation: 'Ironhacker',
    catchPhrase: 'Dios creó el Wi-Fi y el diablo las contraseñas.',
  },
  {
    name: 'Alonso',
    occupation: 'Vago',
    catchPhrase: 'Situación Sentimental: Engordando, preparandome para hibernar',
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrity, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });

  mongoose.connection.close();
});