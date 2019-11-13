const mongoose = require("mongoose");

const Celebrity = require("../models/Celebrity");

const Celebrity = [
    {
        name: "Frank",
        occupation: "TA's KING",
        catchPhrase: "Yooooo"
    },
    {
        name: "Toto",
        occupation: "Foo",
        catchPhrase: "Niaaah"
    },
    {
        name: "Bar",
        occupation: "Des barres",
        catchPhrase:
            "Salut poupey"
    }
];
mongoose
    .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });

Celebrity.create(celebrity)
    .then(dbResult => {
        console.log("The celebrities have been inserted");
    })
    .catch(dbErr => console.log(dbErr));



const Movie = require("../models/Movie");

const movie = [
    {
        title: "Toto chez Frank",
        genre: "Comedy",
        plot: "The adventure of toto and Frank"
    },
    {
        title: "Toto chez Frank 2",
        genre: "Comedy",
        plot: "They're come back."
    },
    {
        title: "Frank supersayen 10²",
        genre: "Drame",
        plot: "Frank is angry."
    }
];
mongoose
    .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });

Movie.create(movie)
    .then(dbResult => {
        console.log("The movie have been inserted");
    })
    .catch(dbErr => console.log(dbErr));