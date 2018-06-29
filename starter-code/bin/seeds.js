const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const celebrities = require('../data/celebrities.data.js');

require('../configs/db.config');

Celebrity.insertMany(celebrities)
    .then(celebrities => {
        console.log(`inserted ${celebrities.length} items successfully:`, celebrities);
    })
    .catch(err => {
        console.log(`error inserting data:`, err);
    })

