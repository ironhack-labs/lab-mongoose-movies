require('dotenv').config();
const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities = [
//   {
//     name: 'Rick',
//     occupation: 'mad scientist',
//     catchPhrase: 'Wubba lubba dub dub!',
//   },
//   {
//     name: 'Morty',
//     occupation: 'unknown',
//     catchPhrase: 'oh geez!',
//   },
//   {
//     name: 'Jerry',
//     occupation: 'comedian',
//     catchPhrase: 'Hmm?',
//   },
// ];

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then((self) => {
//     console.log(`Connected to ${self.connection.name}`);
//     Celebrity.create(celebrities)
//       .then((celebrities) => {
//         celebrities.forEach((celebrities) => {
//           console.log(celebrities.name);
//         });
//       })
//       .catch((dbErr) => {
//         console.log(dbErr);
//       });
//   })
//   .catch((dbErr) =>
//     console.log(`Error occurred while connecting to the Database ${dbErr}`)
//   );

const movies = [
  {
    title: 'foo',
    genre: 'science-fiction',
    plot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis.',
  },
  {
    title: 'bar',
    genre: 'thriller',
    plot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis.',
  },
  {
    title: 'baz',
    genre: 'horror',
    plot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis.',
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
    Movie.create(movies)
      .then((movies) => {
        movies.forEach((movies) => {
          console.log(movies.title);
        });
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  })
  .catch((dbErr) =>
    console.log(`Error occurred while connecting to the Database ${dbErr}`)
  );
