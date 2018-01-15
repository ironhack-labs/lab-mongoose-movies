const mongoose = require('mongoose');

require('../config/db.config');

const Celebrity = require('../models/celebrity');

const celebrities = [
    {
        name: 'Madonna',
        occupation: 'singer',
        catchPhrase: 'Sick and perverted always appeals to me.' 
    },
    {
        name: 'Einstein',
        occupation: 'theoretical physicist',
        catchPhrase: 'The difference between stupidity and genius is that genius has its limits.' 
    },
    {
        name: 'Bruce Lee',
        occupation: 'martial artist',
        catchPhrase: 'Be water my friend'
    }
]

Celebrity.create(celebrities).then( (data) => {
    data.forEach( (product) => {
        console.log(product);
    });
    mongoose.connection.close();
});