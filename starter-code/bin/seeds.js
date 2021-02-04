// Iteration #1
require("../configs/db.config");
const faker = require('faker');

const Celebrity = require("../models/celebrity.model");
const mongoose = require('mongoose');

const celebrities = []

for(let i=0; i<10; i++){
    celebrities.push({
        name: faker.name.findName(),
        occupation: faker.name.jobTitle(),
        catchPhrase: faker.company.catchPhrase()
    })
}

Celebrity.deleteMany()
.then( () => 
    Celebrity.create(celebrities)
    .then(celebrity => celebrity.forEach(celebrity => console.log(`New celebrity added: ${celebrity.name}`)))
        .then(() => {
            console.log('Mongoose conection close')
            mongoose.connection.close()
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error))
)
.catch(console.log('An error happened while saving a new celebrity'))



