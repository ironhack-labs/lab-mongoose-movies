const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity', {
    useMongoClient: true
});

const Celebrity = require('../models/celebrity.js');


let celebritiesData = [
    {
        name: 'Kad',
        occupation: 'Comedian',
        catchPhrase: "C'est Jean Michel!"
    },
    {
        name: 'Olivier',
        occupation: 'Author',
        catchPhrase: "Rippear ? C'est Bullit"
    },
    {
        name: 'Franck Dubosc',
        occupation: 'Comedian',
        catchPhrase: "Alors ? On attend pas Patrick ?!"
    }
]

Celebrity.create(celebritiesData, (err, docs) => {
    if (err) {
        throw err;
    }
    else {
        docs.forEach(patrick => {
            console.log(patrick);
        });
    }
    mongoose.connection.close();
})