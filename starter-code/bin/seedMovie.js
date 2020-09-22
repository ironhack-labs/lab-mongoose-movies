require("dotenv").config();
const movie = require("../models/Movies");
const mongoose = require("mongoose");

const movies = [{
        title: 'A Wrinkle in Time',
        genre: 'action',
        plot: 'i dont know...'
    },
    {
        title: 'The Strangers: Prey at Night',
        genre: 'drama',
        plot: 'a plot twist!'

    },
    {
        title: 'The Hurricane Heist',
        genre: 'horror',
        plot: 'i will not spoil'

    }
];

mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        movie.create(movies)
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