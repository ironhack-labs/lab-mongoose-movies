const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose
    .connect('mongodb://localhost/movies-app', {useNewUrlParser: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const celebrities = [
    {"name": "Pily",
        "occupation" : "actor",
        "catchPhrase" : "Quien es bliss?"},
    {"name" : "Ricky",
        "occupation" : "actor",
        "catchPhrase" : "asdadsa"},
    {"name" : "Mike",
        "occupation" : "actor",
        "catchPhrase" : "Me traicionaste por última vez"}
]

Celebrity.create(celebrities)
    .then(books => {
        console.log(`${books.length} books created`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log('Something went wrong', err);
    })