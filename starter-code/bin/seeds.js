const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");
const Movies = require("../models/movie.model");


const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrities = [
//     {
//         name: "Pippo Franco",
//         occupation: "unemployed",
//         catchPhrase: "Tutti al mare a mostrà le chiappe chiare"
//     },
//     {
//         name: "Nando Martellone",
//         occupation: "Fiction Boris",
//         catchPhrase: "E sti cazzi!"
//     },
//     {
//         name: "Pino Cammino",
//         occupation: "observe all",
//         catchPhrase: "Come una catapulta"
//     }
// ]

// Celebrity.create(celebrities, (err) => {
//     if (err) { throw (err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close();

// });

const movies = [
  {
    title: "Die Hard 1",
    genre: "Action",
    plot: "blablablabla"
  },
  {
    title: "Terminator",
    genre: "Action",
    plot: "blablablabla"
  },
  {
    title: "Mononoke Hime",
    genre: "Anime",
    plot: "blablablabla"
  }
];

Movies.create(movies, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();

});
