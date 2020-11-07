// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity.model');
// const DB_NAME = 'starter-code';

// mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const celebrities = [
//         { name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'Hello' },
//         { name: 'Paris Hilton', occupation: 'Influcencer', catchPhrase: 'Thats hot' },
//         { name: 'Matthew McConaughey', occupation: 'actor', catchPhrase: 'alright alright alright' }
//       ];
// Celebrity.create(celebrities)
//   .then(celebrityFromDB => {
//     console.log(`Created ${celebrityFromDB.length} celebrity`);
//     // Once created, close the DB connection
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));

const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const movies = [
    { name: 'Gentleman', genre: 'Drama-Comedy', plot: 'Drug Dealer'},
    { name: 'Lincoln Lawyer', genre: 'Drama', plot: 'Law' },
    { name: 'Lucky Number Slevin', genre: 'Drama Comedy', plot: 'Bets'}
];
Movie.create(movies)
    .then(movieFromDB => {
        console.log(`Created ${movieFromDB.length} movies`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));