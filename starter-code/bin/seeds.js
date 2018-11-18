const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

const celebrities = [
  {
    name: 'Giorgio Grassini',
    occupation: 'Chef',
    catchPhrase: 'Salvami por piacere',
  },
  {
    name: 'Diego Méndez',
    occupation: 'Singer',
    catchPhrase: 'En un mundo postapocalíptico',
  },
  {
    name: 'Juan Sánchez',
    occupation: 'Actor',
    catchPhrase: 'Acuérdate de cuando empezaste',
  },
];

Celebrity.create(celebrities);
