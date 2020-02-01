const celebrityModel = require("./../models/celebrity")
const mongoose = require("mongoose")

const celebritiesList = [{
        name: 'Leonardo Di Caprio',
        occupation: 'actor',
        catchPhrase: 'blabla'
    },
    {
        name: 'Jay-z',
        occupation: 'rapper',
        catchPhrase: 'bloblo'
    },
    {
        name: 'Donald Trump',
        occupation: 'politic',
        catchPhrase: 'blublu'
    }
]

mongoose
    .connect('mongodb://localhost/starter-code', {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

celebrityModel.create(celebritiesList).then(dbRes => console.log(dbRes)).catch(dbErr => console.log(dbErr))