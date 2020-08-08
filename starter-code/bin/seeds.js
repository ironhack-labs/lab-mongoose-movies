const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

const Movie = require('../models/movie')

require('../configs/db.configs');

const celebrities = [
  {
    name: 'Angelina Jolie',
    occupation: 'actress',
    catchPhrase: 'Everything lost is meant to be found.'
  },
  {
    name: 'Daniel Craig',
    occupation: 'actor',
    catchPhrase: 'My name is Bond. James Bond'
  },
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'You complete me'
  }
];

const movies = [
  {
    title:"Skyfall - 007",
    director:"Sam Mendes",
    year: 2012,
    stars: "Daniel Craig, Javier Bardem, Naomie Harris",
    description:"James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
  },
  {
    title:"Joker",
    director:"Todd Phillips",
    year: 2019,
    stars: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    description:"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
  },
  {
    title:"The Last Samurai",
    director:"Edward Zwick",
    year: 2003,
    stars: "Tom Cruise, Ken Watanabe, Billy Connolly",
    description:"An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
  },
  {
    title:"Lara Croft: Tomb Raider",
    director:"Simon West",
    year: 2001,
    stars: "Angelina Jolie, Jon Voight, Iain Glen",
    description:"Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.",
  }
]

Celebrity.create(celebrities)
  .then(dbCelebrities => {
    console.log(`Created ${dbCelebrities} celebrities`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating celebrities in the DB: ${err}`)
  );

Movie.create(movies)
.then(dbMovies => {
  console.log(`Created ${dbMovies.length} movies`);
  mongoose.connection.close();
})
.catch(err =>
  console.log(`An error occurred while creating movies in the DB: ${err}`)
);



