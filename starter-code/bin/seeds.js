const Celebrity = require('../models/celebrity.model');
const mongoose = require('mongoose');

const celebrities = [name, occupation, catchPhrase];

Celebrity.create(celebrities)
  .then((celebrities) => console.info(`${celebrities.length} new celebrities added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());