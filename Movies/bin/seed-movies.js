const mongoose = require('mongoose');
const Movie = require('../models/movie');

mongoose.connect('mongodb://localhost:27017/movies');

const movies = [
 {
   tittle: "Guardians of the Galaxy Vol. 2 ",
   genre: "Comic",
   country: "EEUU",
 },
 {
   tittle: "Torrente",
   genre: "Comedy",
   country: "Spain",
 },
 {
   tittle: "Amelie",
   genre: "Realism Magic",
   country: "France",
 },
 {
   tittle: "Onk-Back",
   genre: "Action",
   country: "Thayland",
 },
];



Movie.create(movies, (err, docs)=>{
    if (err) { throw err}
    docs.forEach((movie)=>{
      console.log(movie.tittle)
    })




  mongoose.connection.close();
})
