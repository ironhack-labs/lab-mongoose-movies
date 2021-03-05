const mongoose = require('mongoose');
require("./../../app") ;
const movieModel = require("./../../models/Movie.model")
const movies = [
    { title: 'Predator', genre: "Horror", plot: "blablablabalbla", cast: null},
    { title: 'Ghost', genre: "Thriller", plot: "bliblbilbiblib", cast: null},
    { title: 'The Invisible Man', genre: "Action", plot: "blulbulbublublbu", cast: null}
  ];
  movieModel.insertMany(movies)
  .then(insertMovie => console.log(insertMovie))
  .catch(err => console.log(err))