const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Marujita Díaz',
    occupation: 'Fumar',
    catchPhrase: 'Fumando espero al hombre que yo quiero',
  },
  {
    name: 'Bibiana Fernández',
    occupation: 'Chupar',
    catchPhrase: 'Mejor chupar que fumar',
  },
  {
    name: 'Manolo el del bombo',
    occupation: 'Aporrear',
    catchPhrase: 'Spain is different',
  },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((c) => {
    console.log(c.name);
  });
  mongoose.connection.close();
});
