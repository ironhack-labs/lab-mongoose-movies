const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

require('../configs/db.config');

const celebrities = [
    {
    name: 'Kanye West',
    occupation: 'Future President',
    catchPhrase: 'Hi! I am Kanye!'
}, {
    name: 'Nicola Sturgeon',
    occupation: 'First Minister',
    catchPhrase: 'Scotland is ace!'
}, {
    name: 'Boris Johnstone',
    occupation: 'Prime Minister',
    catchPhrase: 'I am a twat'
}
];

Celebrity.create(celebrities)
.then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
})
.catch(error => console.log(`An error occurred while creating celebrities: ${error}`));

