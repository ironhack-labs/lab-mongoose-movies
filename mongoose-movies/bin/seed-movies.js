const mongoose = require('mongoose');
const Movie = require("../models/movie");
mongoose.connect('mongodb://localhost:27017/movies');

const movies = [{
  title: "Heat",
  genre: "action",
  plot: "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist."
}, {
  title: "The Thing",
  genre: "horror",
  plot: "A research facility in Antarctica comes across an alien force that can become anything it touches with 100% accuracy. The members must now find out who's human and who's not before it's too late."
}, {
  title: "Blade Runner",
  genre: "sci-fi",
  plot: "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator."
},];




Movie.create(movies, (err, docs) => {
  if(err) throw err;
  docs.forEach((movie) => {
    console.log(movie.title);
  });
  mongoose.connection.close();
});
