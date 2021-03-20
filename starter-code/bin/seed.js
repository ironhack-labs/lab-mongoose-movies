const mongoose = require('mongoose');
require('../configs/db.config');
const Celebrity = require('../models/celebrity');

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
