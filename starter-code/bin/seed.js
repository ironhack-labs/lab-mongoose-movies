const mongoose = require('mongoose');
require('../configs/db.config');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebritiesToSeed = [
  {
    name: 'Nicole Kidman',
    occupation: 'Actress',
    catchPhrase: "It's a very brave thing to fall in love.",
  },
  {
    name: 'Hugh Jackman',
    occupation: 'Actor',
    catchPhrase: 'If you accept the pain, it cannot hurt you.',
  },
  {
    name: 'Baz Luhrmann',
    occupation: 'Director',
    catchPhrase: 'A life lived in fear is a life half lived.',
  },
];

Celebrity.create(celebritiesToSeed)
  .then((celeb) => {
    console.log(`${celeb.length} celebrities were successfully created!`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log('Error while seeding celebrities ===> ', err);
  });

const moviesToSeed = [
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    genre: 'Drama',
    plot:
      'After a painful breakup, Clementine (Kate Winslet) undergoes a procedure to erase memories of her former boyfriend Joel (Jim Carrey) from her mind. When Joel discovers that Clementine is going to extremes to forget their relationship, he undergoes the same procedure and slowly begins to forget the woman that he loved. Directed by former music video director Michel Gondry, the visually arresting film explores the intricacy of relationships and the pain of loss.',
  },
  {
    title: 'Mank',
    genre: 'Drama',
    plot:
      "1930s Hollywood is reevaluated through the eyes of scathing wit and alcoholic screenwriter Herman J. Mankiewicz as he races to finish 'Citizen Kane'.",
  },
  {
    title: 'Being John Malkovich',
    genre: 'Fantasy',
    plot:
      "In this quirky cult-favorite comedy, unemployed New York City puppeteer Craig Schwartz (John Cusack) reluctantly takes a temp job as a filing clerk for the eccentric Dr. Lester (Orson Bean). While at work, Craig discovers a portal that leads into the mind of renowned actor John Malkovich. When he lets his attractive co-worker Maxine (Catherine Keener) in on the secret, they begin both an unusual business scheme and an odd relationship that involves Craig's restless wife, Lotte (Cameron Diaz).",
  },
];

Movie.create(moviesToSeed)
  .then((movie) => {
    console.log(`${movie.length} movies were successfully created!`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log('Error while seeding movies ===> ', err);
  });
