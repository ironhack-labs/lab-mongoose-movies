const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')
mongoose.connect("mongodb://localhost:27017/lab-mongoose-movies",{useNewUrlParser:true});

const movies = [
    {title: 'Atrapados en el infierno',
    genre: 'Dramedy',
    plot:'A bunch of suburban mexicans trapped in a mall. An homage to Buñuel'},
    {title: 'La vie ordinaire de Madame W.',
    genre: 'Horror',
    plot:'Madame W. does the same thing everyday until she dies'},
    {title: 'CHUCK',
    genre: 'Romantic Comedy',
    plot:'Chuck is a loser who stays a loser'}
]

Movie.create(movies, (err) => {
    if (err) {throw(err)}
    console.log(`Created ${movies.length} entries`)
    mongoose.connection.close()
});

// const celebrities = [
//     {name:'Amanda Pons',
//     occupation:'painter',
//     catchphrase:'my body is my canvas'},
//     {name: 'Günther Fozzi',
//     occupation: 'intellectual',
//     catchphrase:'our century is doomed'},
//     {name: 'Pierre Alexander',
//     occupation: 'actor',
//     catchphrase:'fuck off'}
// ]

// Celebrity.create(celebrities, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrities.length} entries`)
//     mongoose.connection.close()
//   });
  