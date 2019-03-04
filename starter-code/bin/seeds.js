require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities = [{
        name: "Tom Cruise",
        occupation: "Actor",
        catchPhrase: "Mission impossible, baby"
    },
    {
        name: "Beyonce",
        occupation: "Singer",
        catchPhrase: "I am Sasha Fierce"
    },
    {
        name: "Nicolas Cage",
        occupation: "Actor",
        catchPhrase: "Welcome to Con Air"
    },
]


mongoose.connect(process.env.DB)
    .then(() => {
        console.log("connected to mongoose")
        console.log(celebrities)
    })
    .then(() => {
        return Celebrity.insertMany(celebrities)
    })
    .then(celebrities => {
        console.log(celebrities)
        mongoose.connection.close()
    })