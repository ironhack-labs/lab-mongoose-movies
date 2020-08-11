const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

require('../configs/db.config');

const InitialCelebrities = [
    {
        name:'Tom Cruise',
        occupation:'actor',
        catchPhrase:'I always look for a challenge and something thats different.'
    },
    {
        name:'Beyonce',
        occupation:'singer',
        catchPhrase:'When im not feeling my best i ask myself,"What are you gonna do about it?"I use the negativity to fuel the tranformation into a better me.'
    },
    {   
        name:'Daffy Duck',
        occupation:'comedian',
        catchPhrase:'"Rabbit season!" '
    }
];

Celebrity.create(InitialCelebrities)
.then(dbCelebrities => {
    console.log(`Created ${dbCelebrities.length} users`);
    mongoose.connection.close();
})
.catch(err =>
    console.log(`An error occurred while creating Celebrities in the db ${err}`));


    const seedMovies = [
        {
          title: `Monsters, Inc.`,
          genre: 'Animation',
          plot: 'Little kid in monster world causes trouble'
        },
        {
          title: `Titanic`,
          genre: 'Drama',
          plot: 'Man dies because woman hogs door'
        },
        {
          title: `Goodfellas`,
          genre: 'Biopic',
          plot: 'Italians kill other Italians and eat pasta'
        },
      
      ];
      
      Movie.create(seedMovies)
        .then(dbMovies => {
          console.log(`Created ${dbMovies.length} movies`);
          mongoose.connection.close();
        })
        .catch(err => console.log(`An error occurred while creating movies in the DB: ${err}`)); 