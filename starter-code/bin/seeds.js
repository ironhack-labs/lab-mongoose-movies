const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.model');

require('../configs/db.connect');

const celebrities = [{
        name: 'Jim Parsons',
        occupation: 'actor',
        catchPhrase: 'Bazinga!'
    },
    {
        name: 'Redman',
        occupation: 'musician',
        catchPhrase: 'Welcome to da Darkside'
    },
    {
        name: 'Alexey Navalny',
        occupation: 'politician',
        catchPhrase: 'Russia will be free!'
    },
];


//Call the Celebrity model's method with the array as argument
Celebrity.create(celebrities)
    .then(celebritiesDb => console.log('Successfully created celebrities', celebritiesDb))
    .catch(err => console.log(`Err while creating celebrities collection in the DB: ${err}`))