const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity")

const celebrities = [{
        name: "PH",
        occupation: "Billionaire",
        catchPhrase: "Did someone see my keys ?"
    },
    {
        name: "Johnny Depp",
        occupation: "Actor",
        catchPhrase: "Is there some Bourbon left ?"
    },
    {
        name: "John Malkovich",
        occupation: "Actor",
        catchPhrase: "John Malkovich"
    }
]

mongoose
    .connect('mongodb://localhost/starter-code', {
        userNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

Celebrity.insertMany(celebrities)
    .then(x => {
        console.log("movies have been sent to database")
    })
    .catch(dbErr => console.log(dbErr))