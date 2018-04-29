const mongoose = require('mongoose');
const Movie = require('../models/movie');
mongoose.connect('mongodb://localhost/movietime');

const movies = [
  { title : "Casablanca",
    genre : "Romance",
    plot: "Look me in the eyes, baby"
  },
  { title : "The perfect murder",
    genre : "Crime",
    plot : "Husband tries to kill his wealthy wife"
  },
  { title : "Some like it hot",
    genre : "Comedy",
    plot:   "Women seducing men ;)"
  }
];


Movie.create( movies, (err,docs) => {
  if(err){
    throw err;
  }else{
    docs.forEach(( movie ) => {
      console.log(movie.title);
    });
  }
  mongoose.connection.close();
});
