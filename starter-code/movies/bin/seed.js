const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movie');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities = [
//   { name: 'Manu', occupation: 'actor', catchPharse: 'Gotta Catch Em All' },
//   { name: 'Lidia', occupation: 'singer', catchPharse: 'Living la vida loca' },
//   { name: 'Cova', occupation: 'comedian', catchPharse: 'Guau!' },
// ];

const movies = [
  { name: 'Prometheus', genre: 'Mystery', plot: 'Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.' },
  { name: 'Salt', genre: 'Action', plot: 'A CIA agent goes on the run after a defector accuses her of being a Russian spy.' },
  { name: 'Shutter Island', genre: 'Thriller', plot: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.' },
];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     console.log('err: ', err);
//   } else {
//     docs.forEach((doc, index) => {
//       console.log(`doc ${index} inserted ${doc.name}`);
//     });
//   }
// });

Movie.create(movies, (err, docs) => {
  if (err) {
    console.log('err: ', err);
  } else {
    docs.forEach((doc, index) => {
      console.log(`doc ${index} inserted ${doc.name}`);
    });
  }
});