const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ajmovies');

const Movies = require('../models/movies.js');

// const Celebrity = require('../models/celebrity.js');

// const celebrities = [
//   {
//     name: 'Roberto Pacheco',
//     ocupation: "Nasa Engineer",
//     catchPhrase: 'The world is not a cirfurence',
//     profileImage: 'https://randomuser.me/api/portraits/men/8.jpg',
//   },
//   {
//     name: 'Adan Evo',
//     ocupation: "Teologist",
//     catchPhrase: 'Everyone belivies in apple juice',
//     profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//   name: 'Grammy Oscars',
//   ocupation: "Oscars giver",
//   catchPhrase: 'I deserve one Oscar',
//   profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
//   },
// ];
// console.log(celebrities);
//
  // db.celebrities.insertMany()
// Celebrity.create(celebrities, (err, celebrityList) => {
//   if (err) {
//     throw err;
//   }
//
//   celebrityList.forEach((oneCelebrity) => {
//     console.log(`NEW CELEBRITY ${oneCelebrity.name} -> ${oneCelebrity._id}`);
//   });
// });


const movieList = [
  {
    name: 'Casa Blanca',
    genre: "Action",
    plot: 'Good guy,  gun, love',
    movieImage: 'https://vignette1.wikia.nocookie.net/wowwiki/images/f/f8/Warcraft_movie_international_poster.jpg/revision/latest?cb=20160325190659',
  },
  {
    name: 'Movie 2',
    genre: "Genre 2",
    plot: 'Plot 2',
    movieImage: 'https://s-media-cache-ak0.pinimg.com/736x/c1/ab/78/c1ab782b93344350aa968604dbfdc9d8.jpg',
  },
  {
    name: 'Movie 3',
    genre: "Genre 3",
    plot: 'Plot 3',
    movieImage: 'https://s-media-cache-ak0.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg',
  },
];
console.log(movieList);

  // db.celebrities.insertMany()
Movies.create(movieList, (err, movieList) => {
  if (err) {
    throw err;
  }
  movieList.forEach((oneMovie) => {
    console.log(`NEW MOVIE ${oneMovie.name} -> ${oneMovie._id}`);
  });
});
