const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbtitle = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

// const celebrities = [
//   {
//     name: 'Malandro Memo',
//     occupation: 'Other',
//     catchPhrase: 'Malandro é malandro, mané é mané.',
//   },
//   {
//     name: 'Zé Carioca',
//     occupation: 'Sambista',
//     catchPhrase: 'Piu!',
//   },
//   {
//     name: 'Nazareth Tedesco',
//     occupation: 'Matemática',
//     catchPhrase: 'Fica esperto nos degraus, parsa.',
//   },
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });


const movies = [
  {
    title: 'Die Hard',
    genre: 'Action',
    plot: 'Something happens. A lot of things explode.',
  },
  {
    title: 'The Exorcist',
    genre: 'Horror',
    plot: 'Girl gets possessed. Exorcist walks in.',
  },
  {
    title: 'Fear and Loathing in Las Vegas',
    genre: 'Drama',
    plot: 'Gonzo Journalism in a movie.',
  },
];

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
