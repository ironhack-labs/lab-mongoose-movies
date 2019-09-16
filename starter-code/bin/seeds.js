const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
    .connect('mongodb://localhost/the-library-example', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


Celebrity.create({
    name: "Tom Cruise",
    occupation: "actor",
    catchPhrase: "Show ME the MONEY!!!!"
}, {
    name: "Heath Ledger",
    occupation: "actor",
    catchPhrase: "Why so serious?"
}, {
    name: "Robert DeNiro",
    occupation: "actor",
    catchPhrase: "You talkin' to me?"
})