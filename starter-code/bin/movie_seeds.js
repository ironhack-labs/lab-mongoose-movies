require("dotenv").config();
const mongoose = require('mongoose');
const Movies = require('../models/movie');

const movies = [{
        title: "Valley Girl",
        genre: "Romance",
        plot: "Set to a new wave '80s soundtrack, a pair of young lovers from different backgrounds defy their parents and friends to stay together. A musical adaptation of the 1983 film."
    },
    {
        title: "Parasite",
        genre: "Thriller",
        plot: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure."
    },
    {
        title: "The Perks of Being a Wallflower",
        genre: "Comedy",
        plot: "An introvert freshman is taken under the wings of two seniors who welcome him to the real world."
    }
];

mongoose
    .connect(process.env.MONGODB_URI)
    .then((self) => {
        console.log(`Connected to ${self.connection.name}`);
        Movies.create(movies)
            .then((movies) => {
                movies.forEach((movie) => {
                    console.log(movie.title);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(`Error occured while connecting to the Database ${err}`);
    });