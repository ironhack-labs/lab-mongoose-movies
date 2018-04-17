const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity");

mongoose.Promise = Promise;
mongoose   
    .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
    .then(() => {
        console.log('Connected to the database')
    }) .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const celebrities = [
    {
        name: "Shaquille O'Neal",
        occupation: "Baller",
        catchPhrase: "BBQ Chicken!"
    },
    {
        name: "Bill Simmons",
        occupation: "Writer",
        catchPhrase: "I love the Celtics."
    },
    {
        name: "Bill Clinton",
        occupation: "Politician",
        catchPhrase: "Hello, ladies."
    }
];

Celebrity.create(celebrities)
    .then(() => {
        console.log(`Created ${celebrities.length} celebrities`)
    })
    .catch((err) => {
        console.log("Creation ERROR", err);
    });