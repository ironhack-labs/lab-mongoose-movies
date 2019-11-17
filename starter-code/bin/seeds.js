const mongoose = require('mongoose');
const Celebrities = require("../models/Celebrity");

mongoose
    .connect('mongodb://localhost/movies', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


const celebrities = [
    {
        name: "Mae West",
        occupation: "Actress",
        catchPhrase: "Good girls go to heaven, bad girls go everywhere"
    },
    {
        name: "Wiston Churchill",
        occupation: "Politician",
        catchPhrase: "Success is walking from failure to failure with no loss of enthusiasm."
    },
    {
        name: "Charles Darwin",
        occupation: "Scientist",
        catchPhrase: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change"
    },
    {
        name: "Oscar Wilde",
        occupation: "Writer",
        catchPhrase: "Be yourself; everyone else is already taken."
    }
]

Celebrities
    .deleteMany()
    .then(() => {
        Celebrities
            .insertMany(celebrities)
            .then(data => console.log(`Added to the database: \n ${data}`))
            .catch(err => console.log(`There was an error: \n ${err}`))
    })
