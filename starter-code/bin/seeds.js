const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
        name: 'Micket Mouse',
        occupation: 'Actor',
        catchPhrase: 'Waouh!',
    },
    {
        name: 'Barbie',
        occupation: 'Model',
        catchPhrase: 'Im beautiful!',
    },
    {
        name: 'Bob l\'eponge',
        occupation: 'Actor',
        catchPhrase: 'The ocean is the place to be!',
    }
]


Celebrity.create(celebrities)
    .then(celebrities => {
        console.log('celebrities', celebrities)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
    })

/*celebrities.map(celebrity => {
    Celebrity.create(celebrities)
        .then(data => {
            console.log('data', data)
        })
        .catch(err => {
            console.log(err)
        })
})*/