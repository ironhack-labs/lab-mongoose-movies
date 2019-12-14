const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => {
    console.log('🔌 Connected to Mongo!');
  })
  .catch(err => console.error('Error connecting to mongo', err))
;

//
// Celebrities
//

var datas = [
  {
      name: 'Kim Kardashian',
      occupation: 'Unknown',
      catchPhrase: "I'm a vegan",
  },
  {
      name: 'Melz',
      occupation: 'unemployed',
      catchPhrase: "Is this a thing?",
  },
  {
      name: 'Patrick Star',
      occupation: 'Krusty Krab',
      catchPhrase: "Noooo, this is PATRICK",
  }
];
// const p1 = Celebrity.create(datas);
// p1.then(celebrities => console.log(`${celebrities.length} celebrities created!`))

//
// Films
//

var datas = [
  {
    title: 'Rocky 4',
    genre: 'Action',
    plot: "En 1985, Ivan Drago, un boxeur originaire d'URSS, débarque aux États-Unis pour une série de matchs d'exhibition. Lors d'une conférence de presse, il affirme n'avoir aucun intérêt à boxer contre Apollo Creed, le grand ami de Rocky, car il le battrait facilement. Vexé, Apollo le défie officiellement, malgré les réticences de Rocky. Il est tué sur le ring et Rocky va demander un combat contre Ivan Drago pour se venger. Cette confrontation se déroulera sur le sol russe."
  },
  {
    title: 'Rocky 5',
    genre: 'Action',
    plot: "Inspiré par le souvenir de son entraîneur, un Rocky sans le sou et apparemment fini s'entraîne pour la gloire et prend un jeune boxeur sous son aile."
  },
];
const p1 = Movie.create(datas);
p1.then(movies => console.log(`${movies.length} movies created!`))

Promise.all([p1])
  .then(() => mongoose.disconnect())
  .catch(err => console.error(err))
;