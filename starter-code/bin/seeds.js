const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}` );

// const celebrities = [
//     {
//         name:'Charles Chaplin', 
//         ocupation:'Actor',
//         catchPhrase:'Simplicity is a difficult thing to achieve. ...',
//     },
//     {
//         name:'Jimi Hendrix', 
//         ocupation:'Guitarist',
//         catchPhrase:"I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
    
//     },
//     {
//         name:'Anaïs Nin', 
//         ocupation:'Writer',
//         catchPhrase:"We don't see things as they are, we see them as we are.",

//     }
// ]

// Celebrity.create(celebrities, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close();
//   });

// const movies = [
//     {
//         title: "The amazing Cockcroach-man",
//         genre: 'Action',
//         plot: 'A man wakes from a dream only to find out that he has been transformed into a giant cockroach, but he is a good cockroach and decides to figth crime',
//     },
//     {
//         title: "Paris was a woman",
//         genre: 'Bibliography',
//         plot: 'The history of the community of amazing women which became known as "the women of the left bank"',
    
//     },
//     {
//         title: "The hateful little 8",
//         genre: 'Drama',
//         plot: "Tarantino redirects one of his signature films and makes it available for the young'uns",

//     }
// ]

// Movie.create(movies, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${movies.length} movies`)
//     mongoose.connection.close();
//   });