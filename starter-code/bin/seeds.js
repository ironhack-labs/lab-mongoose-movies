const Celebrity = require('../models/celebrity.model');

const mongoose = require('mongoose');

const celebrities = [
  {
    name: 'Gravesen',
    occupation: 'athlete',
    catchPhrase: 'la gravesinha'
  },
  {
    name: 'Ernesto Che Guevara',
    occupation: 'others',
    catchPhrase: 'hasta la victoria siempre!'
  },
  {
    name: 'Paquirrin',
    occupation: 'singer',
    catchPhrase: 'Yo me he cuidado menos, pero he vivido mas'
  }
];

require('../config/db.config');

Celebrity.create(celebrities)
  .then((celebrities) => console.info(`There are ${celebrities.length} in our data base`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close())