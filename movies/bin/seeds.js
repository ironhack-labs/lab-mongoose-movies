const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');
// const Celebrity = require('../models/celebrity');
//
// const celebrities = [
//   {
//     name: 'Chuck Norris',
//     occupation: 'Everything you can imagine and nothing at the same time',
//     catchPhrase: 'Chuck Norris can hear sign language.'
//   },
//   {
//     name: 'Gollum',
//     occupation: 'Ring bearer',
//     catchPhrase: 'My precious!'  },
//   {
//     name: 'Darth Vader',
//     occupation: 'Sith Lord',
//     catchPhrase: 'I am your father!'  }
// ];
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) { throw err };
//
//   docs.forEach( (celebrities) => {
//     console.log(celebrities.name)
//   })
//   mongoose.connection.close();
// });
//





const Movie = require('../models/movie');

const movies = [
  {
    title: 'Weird Movie: Part 1',
    genre: 'Classic weird movies',
    plot: 'That kind of a weird movie you never know why they are made'
  },
  {
    title: 'Star Wars Episode 24: My Grandgrandfather was a Jedi',
    genre: 'Cool space sci-fi with lasers and THE FORCE',
    plot: 'Random guy find out that his grangranfather was JarJar Binks. He become a Sith Lord after that'
  },
  {
    title: 'Aliens vs Hobbits',
    genre: 'Cool alien/medieval action',
    plot: 'Super Aliens are invading the Middle Earth, the brave Hobbits will have to battle the fight of their lives on the space now'
  }
];

Movie.create(movies, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (movies) => {
    console.log(movies.title)
  })
  mongoose.connection.close();
});
