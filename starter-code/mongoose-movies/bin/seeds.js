const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});

const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie');

// Celebrities
// const celebrities = [
//     {
//         name: 'Bruis Willis',
//         occupation: 'Actor',
//         catchPhrase: 'Unknown'
//     },
//     {
//         name: 'Arnold Schwarzneger',
//         occupation: 'Actor',
//         catchPhrase: 'Asta la Vista'
//     },
//     {
//         name: 'Tom Cruise',
//         occupation: 'Actor',
//         catchPhrase: 'Unknown'
//     },
//   ];

  const movies = [
      {
          title: "Terminator",
          genre: "Action",
          plot: "Termitator, a robot from the future sent back to past to prevent creating of AI that will wipe out almost all humanity in the future."
      },
      {
          title: "Fifth Element",
          genre: "Fanasy",
          plot: "Dark forces are preparing to invade and destory Earth, only the 5th element can stop them."
      },
      {
          title: "Mission Impossible",
          genre: "Action",
          plot: "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization."
      }
  ];

 // Save Sample Movies to Database
 Movie.create(movies, (err, data) => {
    if (err) { throw err;}
    data.forEach((movie) => {
        console.log(movie.title);
    });
    mongoose.connection.close();
  });


//   // Save Sample Celebrities to Database
//   Celebrity.create(celebrities, (err, docs) => {
//     if (err) {
//         throw err;
//     }

//     docs.forEach((celebrity) => {
//         console.log(celebrity.name);
//     });
//     mongoose.connection.close();
//   });