const mongoose = require('mongoose');
const app = require('../app');
const Celebrity = require("../models/Celebrity.model")

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const celbrities = [{
    name: "Frederik",
    occupation: 'Actor',
    catchPhrase: 'You know you want to be me'
}, {
    name: "Kimberly Awesome",
    occupation: 'Singer',
    catchPhrase: 'Life is Music'
}, {
    name: "Rich Hariette",
    occupation: 'Reality-TV',
    catchPhrase: 'Money makes me happy'
}];

Celebrity.create(celbrities)
    .then((celebritiesDB) => {
        console.log(`${celebritiesDB.length} have been created`);
        mongoose.connection.close()
    })
    .catch((err) =>
        console.log(`Something went wrong with the celeb-creation ${err}`)
    );