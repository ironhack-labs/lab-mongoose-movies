const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/library-celebrity', {
    useNewUrlParser: true
});

const celebrities = [
    {
        name: 'Kiran Shagoti',
        occupation: 'Singer',
        catchPhrase: 'The amazing girl'
    },
    {
        name: 'Anna Nauruschat',
        occupation: 'Model',
        catchPhrase: 'The funny girl'
    },
    {
        name: 'Ali Kucukavci',
        occupation: 'Adventurer',
        catchPhrase: 'World explorer'
    }
];

Celebrity.insertMany(celebrities)
    .then(data => {
        console.log('Success! Added ' + data.length + ' celebrities in the collection');
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });
