const celebrities = [
  {
    name: 'Nicolas Cage',
    ocupattion: "Movie Star",
    catchPhrase: 'No sé quién soy. Pero sé lo que me mantiene vivo es el control.',
  },
  {
    name: 'Nicolas Cage',
    ocupattion: "Movie Star",
    catchPhrase: 'He venido a Las Vegas para matarme bebiendo.',
  },
  {
    name: 'Nicolas Cage',
    ocupattion: "Movie Star",
    catchPhrase: 'Eso es lo que pasa con el futuro. Que si lo ves, cambia.',
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
    console.log(celebrity.name);
  })
  mongoose.connection.close();
});
