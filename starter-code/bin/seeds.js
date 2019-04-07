const Celebrity   = require('../models/celebrity.model');
const celebrities = require('../data/celebrities.json');
const mongoose    = require('mongoose');
require('../config/db.config');

Celebrity.create(celebrities)
  .then( (celebrities) => console.info(`${celebrities.length} new books added to the database`) )
  .catch( error => console.error(error) )
  .then( () => mongoose.connection.close() );