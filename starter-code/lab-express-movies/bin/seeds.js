const mongoose = require('mongoose');


const Celebrity = require("../models/celebrity-model.js");



mongoose.Promise = Promise;
mongoose
    .connect('mongodb://localhost/lab-mongoose-movies', { useMongoClient: true })
    .then(() => {
        console.log('Connected to Mongo!')
    }).catch(err => {
        console.error('Error connecting to mongo', err)
    });

const celebrityData = [

    {
        name: "Emmanuelle",
        occupation: "First of class",
        catchPhrase: "please Nizar"
    },

    {
        name: "Mohamed",
        occupation: "bully of class",
        catchPhrase: "First of class"
    },

    {
        name: "Kim Kardashian",
        occupation: "chilling",
        catchPhrase: "we have a tv show"
    }

];




Celebrity.create(celebrityData)
    .then(celebrityDoc => {
        console.log(`inserted celebrity ${celebrityDoc.length}  `)
    })
    .catch(err => {
        console.log("Create Failure", err)
    })