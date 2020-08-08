const mongoose = require('mongoose');
const CelebrityModel = require('../models/celebrity');
const { findOneAndUpdate } = require('../models/celebrity');

//require db config
require('../configs/db.config')

const celebrities = [
    {name: 'Elmer Fudd', occupation: 'Hunter', catchPhrase: 'Its rabbit season'},
    {name: 'Scrooge McDuck', occupation: 'Millionaire', catchPhrase: 'I like gold'},
    {name: 'Inspector Gadget', occupation: 'Detective', catchPhrase: 'Go! Gadget arm!'}
]

//Create Model

CelebrityModel.create(celebrities)
    .then(celebritiesFromDB => {
        console.log(`Created ${celebritiesFromDB.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(err=> console.log(`Error while created celebrities: ${err}`));
