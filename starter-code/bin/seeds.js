const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

require('../config/db.config');
Celebrity.collection.drop();

const celebrities = [
  {
    name: 'Ava DuVernay',
    occupation: 'Actor',
    catchPhrase:
      'Ava debuted with Premam alongside Nivin Pauly, which was a commercial success. She then had a cameo in James & Alice, a Malayalam movie. Later she forayed into Telugu films with a handful of projects including A Aa, where she played a lead role along with Nithiin and Samantha Ruth Prabhu.',
  },
  {
    name: 'Johannes Roberts',
    occupation: 'Sport',
    catchPhrase:
      'Johannes Roberts was born on 11 October 1993 in Surat, Gujarat. His father, Himanshu Pandya, ran a small car finance business in Surat which he shut down and shifted to Vadodara when Johannes was five; he did so in order to facilitate his sons with better cricket training facilities',
  },
  {
    name: 'Anthony Anderson',
    occupation: 'Actor',
    catchPhrase:
      'Anthony Anderson (born August 15, 1970)[1][2] is an American comedian, actor, writer, and game show host. He has starred in his own short-lived sitcom, All About the Andersons, as well as the ABC sitcom Black-ish and the Fox sitcom The Bernie Mac Show during its fifth and final season.',
  },
];

Celebrity.create(celebrities)
  .then(cel => console.log(cel))
  .catch(err => console.log(`Cannot save the data ${err}`));
