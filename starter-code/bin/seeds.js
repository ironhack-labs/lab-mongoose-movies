const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrities = [{
    name: 'Cameron Diaz',
    occupation: 'actress',
    catchPhrase: 'I dont know'
}, {
    name: 'Melissa McCarthy',
    occupation: 'actress',
    catchPhrase: 'I dont know'
}, {
    name: 'Johnny Depp',
    occupation: 'actor',
    catchPhrase: 'I dont know'
}];


Celebrity.create(celebrities)
    .then(celebritiesDB => {
        console.log(`Created ${celebritiesDB.length} celebreties in the database`);
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(`Oh no. An error happened, check this out: ${error}`);
    });