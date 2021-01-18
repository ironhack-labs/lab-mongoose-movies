const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
require('../config/db.config');

const celebrities = [
    {
        name: 'Harry Potter',
        occupation: 'Magician',
        catchPhrase: 'Alohomora'
    },
    {
        name: 'Ali G',
        occupation: 'Rapper',
        catchPhrase: 'Is it because I is black?'
    },
    {
        name: 'Barney Stinson',
        occupation: 'P.L.E.A.S.E.',
        catchPhrase: 'Have you met Ted'
    }
];

Celebrity.create(celebrities)
    .then(celebrity => {
        console.log(`New celebrities added: ${celebrity}`);
        mongoose.connection.close();
    })
    .catch(error => console.log(error));