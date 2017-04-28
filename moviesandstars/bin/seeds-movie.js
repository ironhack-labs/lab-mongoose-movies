const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebmovie-dev');
const Movie = require('../models/movie');

const movies = [

{
title : 'movie1',
genre : 'ficcion',
plot : 'bla bla bla1',
},

{
title : 'movie2',
genre : 'romance',
plot : 'bla bla bla2',
},

{
title : 'movie3',
genre : 'action',
plot : 'bla bla bla3',
},

]


Movie.create(movies, (err, docs) => {
 if (err) {
   throw err;
 }

 docs.forEach((movie) => {
   console.log(movie.title)
 });



 mongoose.connection.close();
});
