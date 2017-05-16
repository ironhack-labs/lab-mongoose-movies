const celebrities = [
  {
    name: 'Iker Casillas',
    ocupattion: "Futbolista",
    catchPhrase: 'Amo a Mourinho',
  },
  {
    name: 'The Rock',
    ocupattion: "Movie Star",
    catchPhrase: 'I´m the strongest guy here',
  },
  {
    name: 'Eva Longoria',
    ocupattion: "Movie Star",
    catchPhrase: 'I am a latina and hate Trump',
  },
];

// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies-celebrities');
const Celebrity = require('../models/celebrities.js');

// bin/seeds.js
Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celebrity) => {
    console.log(celebrity.name)
  })
  mongoose.connection.close();
});
