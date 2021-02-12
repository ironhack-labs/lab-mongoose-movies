const mongoose          = require('mongoose');
const Celebrity         = require('../models/celebrity.js')

const DB_NAME           = 'starter-code'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const celebrities = [
    {name: 'Angelina Jolie', occupation: 'Actress', catchPhrase: 'Antes muerta que sencilla'},
    {name: 'Brad Pitt', occupation: 'Actor', catchPhrase: 'Vive intensamente'},
    {name: 'Kim Kardashian', occupation: 'Influencer', catchPhrase: 'Se me rompió la uña'}
];

Celebrity.create(celebrities)
    .then(celebritiesFromDB => {
        console.log(`Created ${celebritiesFromDB.length} celebrities`);
        
        mongoose.connection.close()
    }).catch(error => console.log(`An error ocurred: ${error}`))



   const mongoose          = require('mongoose');
   const Movie             = require('../models/movie.js')
   
   const DB_NAME           = 'starter-code'
   
   mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
       useCreateIndex: true,
       useNewUrlParser: true,
       useUnifiedTopology: true
   });

   const movies = [
    {title: 'Scream', genre: 'Terror', plot: 'Corre por tu vida'},
    {title: 'Call me by your name', genre: 'Drama', plot: 'El primer amor'},
    {title: 'Blue Jasmine', genre: 'Drama/Comedia', plot: 'La vida es un torbellino'}
];

Movie.create(movies)
    .then(moviesFromDB => {
        console.log(`Created ${moviesFromDB.length} movies`);

        mongoose.connection.close()
    }).catch(error => console.log(`An error ocurred: ${error}`))
