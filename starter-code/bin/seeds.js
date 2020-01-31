const mongoose = require('mongoose');
const celebrityModel = require("../models/Celebrity.js");
const teamModel = require("../models/Team.js");


const celebrities = [
    {
        name: "Topson",
        occupation: "midlaner",
        catchPhrase: "kill them all",
    },
    {
        name: "ana",
        occupation: "carry",
        catchPhrase: "ok G",
    },
    {
        name: "Ceb",
        occupation: "offlaner",
        catchPhrase: "it's a win in my book",
    }
];

const teams = [
    {
        name: "OG",
        game: "Dota2 and counter-strike",
        description: "2 times TI winners",
    },
    {
        name: "Team Secret",
        game: "Dota 2",
        description: "my favorite team",
    },
    {
        name: "Team Liquid",
        game: "Dota 2, Starcraft 2, ...",
        description: "TI 7 winner and TI 9 runner up",
    }
];

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


celebrityModel
    .insertMany(celebrities)
    .then(dbSuccess => {
        console.log("movies inserted successfully", dbSuccess);
    })
    .catch(dbErr => {
        console.log("OH NO !", dbErr);
    })

teamModel
    .insertMany(teams)
    .then(dbSuccess => {
        console.log("movies inserted successfully", dbSuccess);
    })
    .catch(dbErr => {
        console.log("OH NO !", dbErr);
    })