const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const celebrities = require('../data/celebrities.data');

require('../configs/db.config');

Celebrity.create(celebrities)
    .then(celebrities => {
        console.info(`Charged ${celebrities.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('error: ', error)
        mongoose.connection.close();
    });
