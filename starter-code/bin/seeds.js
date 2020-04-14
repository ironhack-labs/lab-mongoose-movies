// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// mongoose.connect(`mongodb://localhost/library-project`, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const celebrities = [{
//         name: 'Arnold Schwarzenegger',
//         occupation: 'actor',
//         catchPhrase: 'Hasta la vista baby'
//     },
//     {
//         name: 'Natalie Portman',
//         occupation: 'actor',
//         catchPhrase: 'Whatever'
//     },
//     {
//         name: 'Jennifer Lawrence',
//         occupation: 'actor',
//         catchPhrase: 'Lets do it'
//     }
// ];

// Celebrity.create(celebrities).then(() => {
//     console.log(`Created ${celebrities.length} celebrity`);
//     mongoose.connection.close();
// });

const mongoose = require('mongoose');
const Movie = require('../models/movie');

mongoose.connect(`mongodb://localhost/library-project`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const movies = [{
    title: "whatever",
    genre: "whatever",
    plot: "whatever"
}];

Movie.create(movies).then(() => {
    console.log(`Created ${movies.length} movie`);
    mongoose.connection.close();
});