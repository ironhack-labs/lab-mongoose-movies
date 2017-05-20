const mongoose = require('mongoose');
const Movies = require('../models/movie-models.js');

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const movieModels = [{
        title: "Miky Mouse",
        genre: "Kids Chanel",
        plot:"Mini is lost"

    },
    {
        title: "Spirits",
        genre: "thriller",
        plot: "kill them all"

    },
    {
        title: "quija",
        genre: "Thrillers",
        plot: "Eat you all Alive"

    }
];
Movies.create(movieModels, (err, themovie) => {
    if (err) {
        throw (err);
    }
    themovie.forEach((onemovie) => {
        console.log(onemovie.title);
    });
});
