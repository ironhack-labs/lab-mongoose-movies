const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const faker = require('faker');
require('../configs/db.config');

const celebrities = [];

for (let i = 1; i <= 5; i++) {
    const randCeleb = {
        name: faker.name.findName(),
        occupation: faker.name.jobTitle(),
        catchphrase: faker.company.catchPhrase()
    }
    celebrities.push(randCeleb);
}

Celebrity.deleteMany({})
    .then(Celebrity.create(celebrities))
    .then(() => {
        console.log('Created registers correctly')
        mongoose.connection.close()
    })
    .catch(e => console.error(e))