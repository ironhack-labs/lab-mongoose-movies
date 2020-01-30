const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

require('../config/db.config');

const celebrities = [
  {
    name: 'Ava DuVernay',
    occupation: 'Director',
    catchPhrase: 'A Wrinkle in Time',
  },
  {
    name: 'Johannes Roberts',
    occupation: 'Enginier',
    catchPhrase: 'The Strangers: Prey at Night',
  },
  {
    name: 'Nash Edgerton',
    occupation: 'Developer',
    catchPhrase: 'The Leisure Seeker',
  },
];

Celebrity.create(celebrities)
  .then(cel => console.log(cel))
  .catch(err => console.log(`Cannot save the data ${err}`));
