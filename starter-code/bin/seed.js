const mongoose = require('mongoose');

const MovieModel = require('../models/movie-model.js');


mongoose.connect('mongodb://localhost/movie');


const movieArray = [
    {
      title: 'American Pie',
      genre: 'Comedy',
      plot: `Hoping to be young again`
    },
    {
      title: 'Alien',
      genre: 'Thriller',
      plot: 'Hunt or be hunted'
    },
    {
      title: 'Pokemon',
      genre: 'Anime',
      plot: 'Enslave the animals'
    }
];

MovieModel.create(
  // 1st argument -> array of products to save
  movieArray,

  // 2nd argument -> callback
  (err, movieAfterSave) => {
      if (err) {
          console.log('Create error 😅');
          console.log(err);
          return;
      }

      movieAfterSave.forEach((movie) => {
          console.log('New Movie ---> ' + movie.title);
      });
  }
);
