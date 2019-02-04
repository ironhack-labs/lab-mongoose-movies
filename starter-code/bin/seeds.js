const mongoose = require('mongoose');
const celebritys_1 = require('../models/celebrity.js');

mongoose.connect('mongodb://localhost/starter-celebrities',
    { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const celebritys =
    [
        {
            name: "Tom Cruise",
            occupation: "actor",
            catchPhrase: "live your life",

        },
        {
            name: "Beyonce",
            occupation: "singer",
            catchPhrase: "Music is my passion",

        },
        {
            name: "Daffy Duck",
            occupation: "comedian",
            catchPhrase: "smile is years of life",

        },
    ]
celebritys_1.insertMany(celebritys)
    .then((e) => {

    })
    .catch((err) => console.log("ERROR", err))