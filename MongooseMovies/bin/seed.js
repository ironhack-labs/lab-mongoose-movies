const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

mongoose.connect('mongodb://localhost/mongoose-movies-dev');

let celebs = [
  {
    name : 'Hank Green',
    occupation : 'YouTuber, Producer',
    catchPhrase : 'Don\'t forget to be awesome!'
  },
  {
    name : 'Wil Wheaton',
    occupation : 'Youtuber, Actor',
    catchPhrase : 'Play more games!'
  },
  {
    name : 'George Takei',
    occupation : 'Retired, Actor',
    catchPhrase : 'Oh myyyyyy...'
  }
];

Celebrity.create(celebs, (err, celebDocs) => {
  if (err) {
    throw err;
  }

  celebDocs.forEach((celeb) => console.log("Created: " + celeb.name));
});

mongoose.disconnect();
