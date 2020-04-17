// bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose.connect(`mongodb://localhost/movies-project`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebArray = [
    {
        name: 'Peter Pan',
        occupation: 'Pilot',
        catchPhrase: 'Never grew up'
    },
    {
        name: 'Dory II',
        occupation: 'Psychiatrist',
        catchPhrase: 'Who are you and where?'
    },
    {
        name: 'Bruce Willis',
        occupation: 'Actor',
        catchPhrase: 'I\'m not the Hasta-la-Vista-Guy!'
    }
]

// create entries after running seeds.js
Celebrity.create(celebArray).then(() => {
    console.log(`Created ${celebArray.length} celebArray`);
    mongoose.connection.close();
  });


  const movieArray = [
    {
        title: 'Time for cheesecake',
        genre: 'Tutorial',
        plot: 'Every cheesecake could be enlighted by some fruits!'
    },
    {
        title: 'Me and the treadmill',
        genre: 'Biography',
        plot: 'Repeatition at it\'s best!'
    },
    {
        title: 'Chronicles of Tempelhof',
        genre: 'Documentation',
        plot: '24-7 of Berlins Kiez'
    }
]

// create entries after running seeds.js
Movie.create(movieArray).then(() => {
    console.log(`Created ${movieArray.length} movieArray`);
    mongoose.connection.close();
  });