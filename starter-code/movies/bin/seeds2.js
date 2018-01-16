const mongoose = require('mongoose');

require('../config/db.config');

const Movie = require('../models/movie.model');

const movies = [
  {
    title: 'Liam neelson',
    genre: "action",
    plot: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
  },
  {
    title: 'Arnold',
    genre: "comedy",
    plot: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
  },
  {
    title: 'Van damme',
    genre: "trhiller",
    plot: 'You never have to leave your computer! All you can eat nutrition!',
  }
];

Movie.create(movies).then((docs) => {
  docs.forEach((movie) => {
    console.log(movie.title);
  });

  mongoose.connection.close();
});
