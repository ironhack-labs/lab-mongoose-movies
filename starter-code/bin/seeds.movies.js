require("dotenv").config();
const Movie = require("../models/movies.model");
// require('../config/mongodb');
const mongoose = require("mongoose");



const movies = [{
        title: "Titanic",
        genre: "Drama",
        plot: "Rose and Jack are on a boat, they fall in love but the boat sinks and Jack, even though THERE WAS ENOUGH SPACE ON THAT DAMN DOOR!!"
    },
    {
        title: "Black Panther",
        genre: "Action",
        plot: "Best Marvel film EVER! and not just because it's shot in Africa! that's all there is to say : watch it!"
    },
    {
        title: "Mullholland Drive",
        genre: "WTF",
        plot: "Never got that movie, can please someone explain it to me?"
    },
];


mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((self) => {
        Movie.create(movies)
            .then((dbResult) => {
                console.log(dbResult);
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });