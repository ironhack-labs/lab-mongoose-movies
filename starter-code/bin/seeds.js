//require("dotenv").config();
const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity")

mongoose
    .connect('mongodb://localhost/celebrities', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


const celebritiesArr = [
    {
        name: "Rafa Nadal",
        occupation: "tennis player",
        catchPhrase: "Sin sufrimiento, no hay felicidad. He aprendido a disfrutar sufriendo"
    },
    {
        name: "Fernando Alonso",
        occupation: "F1 driver",
        catchPhrase: "En la pista no hay amigos"
    },
    {
        name: "Luigi Luca Cavalli Sforza",
        occupation: "geneticist",
        catchPhrase: "El racismo es un antiguo flagelo de la humanidad"
    }
];



Celebrities
    .deleteMany()
    .then(() => {
        Celebrities
            .insertMany(celebritiesArr)
            .then(data => console.log(`Added to the database: \n ${data}`))
            .catch(err => console.log(`There was an error: \n ${err}`))
    })

