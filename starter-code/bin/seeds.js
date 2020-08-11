const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

require('../configs/db.configs');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'scientology is good for us!!'
  },
  {
    name: 'Al Pacino',
    occupation: 'Actor',
    catchPhrase: 'I dont know what to say really'
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'all the single ladies.'
  },
  {
    name: 'Daffy Duck',
    occupation: 'Duck',
    catchPhrase: "You're despicable!"
  },
];

const movies = [
  {
    title:"Interstellar",
    director:"Christopher Nolan",
    year: 2014,
    description:"Dans un futur proche, la Terre est devenue de moins en moins accueillante pour l'humanité plongée dans une grave crise alimentaire.",
  },
  {
    title:"Magnolia",
    director:"Paul Thomas Anderson",
    year: 1999,
    description:"À travers l'histoire de neuf personnages principaux aux destins tragiques entre-croisés, le film est une parabole sur les êtres humains, les liens, le passé, les douleurs et les coïncidences.",
  },
  {
    title:"La misión",
    director:"Robert De Niro",
    year: 1986,
    description:"Un marchand d'esclaves (Robert De Niro) rejoint un jésuite (Jeremy Irons) lors d'une mission politique en Amérique du Sud.",
  },
  {
    title:"Crash",
    director:"Simon West",
    year: 2004,
    description:"Les tensions raciales émergent dans une collection d'histoires entrelacées impliquant des résidents de Los Angeles.",
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


