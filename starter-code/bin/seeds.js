const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
require('../config/db.config.js');


const celebArray = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Danger Zone',
  },
  {
    name: 'Gillian Flynn',
    occupation: 'author',
    catchPhrase: 'Does anyone do anything profusely except apologize? Sweat, I guess.',
  },
  {
    name: 'Frank Herbert',
    occupation: 'author',
    catchPhrase: 'The spice must flow',
  },
];

Celebrity.create(celebArray)
 .then((celebArray) => console.info(`${celebArray.length} new celebArray added to the database`))
 .catch(error => console.error(error))
 .then(() => mongoose.connection.close());