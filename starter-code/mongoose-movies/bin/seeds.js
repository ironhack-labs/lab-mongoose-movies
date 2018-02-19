const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Movies');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movies');

// const celebrity = [
//   {
//     name: 'Powers',
//     occupation: 'Comedian',
//     catchPhrase: "Groovy Baby"
    
//   },
//   {
//     name: 'Bill',
//     occupation: 'Comedian',
//     catchPhrase: 'Who you gonna Call'
    
//   },
//   {
//     name: 'Seth Rogan',
//     occupation: 'Stoner Comedian',
//     catchPhrase: 'Wheres James Franco'
    
//   }
// ];


// Celebrity.create(celebrity, (err, ceb) => {
//   if (err) {
//     throw err;
//   }

//   ceb.forEach((celebrity) => {
//     console.log(celebrity.name)
//   });
//   mongoose.connection.close();
// });

const movies = [
  {
    name: 'Movie1',
    genre: 'genre1',
    plot: 'plot1'
  },
  {
    name: 'Movie2',
    genre: 'genre2',
    plot: 'plot2'
  },
  {
    name: 'Movie3',
    genre: 'genre3',
    plot: 'plot3'
  }
];

Movie.create(movie, (err, film) => {
  if (err) { throw err; }

  film.forEach(element => {
    console.log(`${element.name}`);
  });
  mongoose.disconnect();
});