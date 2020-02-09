const mongoose = require('mongoose');
const faker = require('faker');
const Celebrities = require('../models/Celebrity');


function dbConnect(cb) {
    mongoose
    .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        cb();
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });
}


dbConnect(() => {
    Celebrities.deleteMany()
    .then(() => {
        let celebs = generateCelebs();
        return Celebrities.insertMany(celebs);
    })
    .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
    });
});


function generateCelebs() {
    return celebrities = new Array(3).fill().map(() => {
        return celebrity = {
            name: faker.name.findName(),
            occupation: faker.name.jobType(),
            catchPhrase: faker.company.catchPhrase()
        }
    });
}





