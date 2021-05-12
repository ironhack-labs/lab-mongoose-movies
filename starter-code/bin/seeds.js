const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

require("../db");

const seedCelebs = [
    {
        name: "Dale Cooper",
        occupation: "Special agent",
        catchPhrase: "This must be where pies go when they die."
    },
    {
        name: "Audrey Horne",
        occupation: "Salon owner",
        catchPhrase: "You know, sometimes I get so flushed, it's interesting. Do your palms ever itch?"
    },
    {
        name: "Log Lady",
        occupation: "Ballroom dancing teacher",
        catchPhrase: "One day my log will have something to say about this. My log saw something that night."
    }
];

Celebrity.create(seedCelebs)
  .then(dbCelebs => {
    console.log(`Created ${dbCelebs.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating fake actors in the DB: ${err}`));

  const seedMovies = [
    {
        title: "cherry pie",
        genre: "spy",
        plot: "Dale goes to the place where pies go when they die."
    },
    {
        title: "itchy palms",
        genre: "western",
        plot: "audrey gets so flushed that she shoots up a saloon, it gets interesting."
    },
    {
        title: "Lady of the log",
        genre: "Documentary",
        plot: "a lady and her log. their deep connection. a world that just can't understand. one terrible night."
    }
];

Movie.create(seedMovies)
  .then(dbMovies => {
    console.log(`Created ${dbMovies.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating fake movies in the DB: ${err}`));