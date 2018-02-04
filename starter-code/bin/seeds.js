const celebrities = [
    {
      name: 'Talia Al-Gul',
      ocupattion: "Movie Star",
      catchPhrase: 'It was all a cruel ploy to gain your confidence.',
    },
    {
      name: 'Batman',
      ocupattion: "Movie Star",
      catchPhrase: 'that was a "cruel ploy? Sign me up for another!...it was great.',
    },
    {
      name: 'Bane',
      ocupattion: "Movie Star",
      catchPhrase: 'When the mission is at hand no act is off limits.',
    },
  ];

  // bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies-celebrities');
const Celebrity = require('../models/celebrity.js');

// bin/seeds.js
Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celebrity) => {
    console.log(celebrity.name);
  })
  mongoose.connection.close();
});