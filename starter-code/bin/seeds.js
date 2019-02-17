// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const data = [
//   {
//     name: 'Sergio Ramos',
//     ocupation: 'Football player',
//     catchPhrase: 'Morry Crismas',
//   },
//   {
//     name: 'Terminator',
//     ocupation: 'Robot',
//     catchPhrase: 'Sayonara baby',
//   },
//   {
//     name: 'Chiquito de la Calzada',
//     ocupation: 'Comedian',
//     catchPhrase: 'Pecadorrrrrrr',
//   },
// ];

// (async () => {
//   try {
//     await mongoose.connect('mongodb://localhost/moviesApp', { useNewUrlParser: true });
//     console.log('Connected to mongo!!');
//     const insertedArray = await Celebrity.insertMany(data);
//     console.log(`Total of ${insertedArray.length} documents inserted.`);
//   } catch (err) {
//     console.error('Error connecting to mongo', err);
//   } finally {
//     mongoose.connection.close();
//   }
// })();

const mongoose = require('mongoose');
const Movies = require('../models/movie');

const data = [
  {
    title: 'The lord of the rings',
    genre: 'Fantastic',
    plot: 'bla',
  },
  {
    title: 'The two towers',
    genre: 'Fantastic',
    plot: 'bla bla',
  },
  {
    title: 'The return of the king',
    genre: 'Fantastic',
    plot: 'bla bla bla',
  },
];

(async () => {
  try {
    await mongoose.connect('mongodb://localhost/moviesApp', { useNewUrlParser: true });
    console.log('Connected to mongo!!');
    const insertedArray = await Movies.insertMany(data);
    console.log(`Total of ${insertedArray.length} documents inserted.`);
  } catch (err) {
    console.error('Error connecting to mongo', err);
  } finally {
    mongoose.connection.close();
  }
})();
