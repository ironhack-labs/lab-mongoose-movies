const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebmovies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrityData = [
  {
  name : 'Ernesto Sevilla',
  occupation : 'showman',
  catchPhrase : 'Gañaaaaaaaaaan'
}, {
  name : 'CR7',
  occupation : 'model',
  catchPhrase : 'Siuuuu'
}, {
  name : 'Javier Clemente',
  occupation : 'exmanager',
  catchPhrase : 'Patapum parriba'
}
];

const movieData = [
   {
     name: "Prueba",
     genre: "masculino",
     plot : "kljdlkafdjlkdgjds",
   },
   {
     name: "Prueba2",
     genre: "femenino",
     plot : "oijrsglgrpelgh",
   },
   {
     name: "Prueba3",
     genre: "indefinido",
     plot : "irghskljrng,srmgn,g",
   }
 ];

 Celebrity.collection.drop();
 Movie.collection.drop();

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.catchPhrase)
  });

  Movie.create(movieData, (err, docs) => {
   if (err) {
     throw err;
   }
   docs.forEach((movie) => {
     console.log(movie.name)
   });
  mongoose.connection.close();
});
