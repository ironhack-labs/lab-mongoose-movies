const mongoose = require('mongoose');
const Movie = require('../models/movie');

mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true, useUnifiedTopology: true } );
// const celebrities = [
//     {
//         name: "Bad Bunny",
//         occupation: "Singer",
//         catchPhrase: "Bad bunny baby ba ba ba"
//     },
//     {
//         name: "Anuel",
//         occupation: "Singer",
//         catchPhrase: "Real hasta la muerte, BEBESITA"
//     },
//     {
//         name: "Ozuna",
//         occupation: "Singer",
//         catchPhrase: "El negrito de ojos claros"
//     }
// ]
// Celebrity.create(celebrities, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close();
//   });

const movies = [
        {
            title: "Pulp Fiction",
            genre: "Action",
            plot: "Most epic film ever"
        },
        {
            title: "Lord of the Rings-Trilogy",
            genre: "Fantasy",
            plot: "Epic fantasy trilogy"
        },
        {
            title: "OldBoy",
            genre: "Action",
            plot: "South Korean action film, epic"
        }
    ]

    Movie.create(movies, (err) => {
        if (err) { throw(err) }
        console.log(`Created ${movies.length} movies`)
        mongoose.connection.close();
      });