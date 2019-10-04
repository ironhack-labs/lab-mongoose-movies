const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
// const Movie = require("../models/movie");

mongoose
    .connect("mongodb://localhost/moviesLab", {
        useNewUrlParser: true
    })
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err))

const seed = [
    {
        name: "Gisele Budchen",
        occupation: "Model",
        catchPhrase: "Tche"
    },
    {
        name: "Kevin Hart",
        occupation: "Comedian",
        catchPhrase: "I make money"
    },
    {
        name: "Will Smith",
        occupation: "Actor",
        catchPhrase: "Oh yeah"
    },
    // {
    //     title: "Taxi",
    //     genre: "Unknown",
    //     plot: "I don't care"
    // },
    // {
    //     title: "Jumanji",
    //     genre: "Comedy",
    //     plot: "Shit goes down"
    // },
    // {
    //     title: "Youtube Rewind",
    //     genre: "Shit",
    //     plot: "SHIT!"
    // },
];

// Movie.create(seed);
Celebrity.create(seed);
