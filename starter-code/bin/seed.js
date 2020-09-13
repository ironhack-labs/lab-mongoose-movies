const mongoose = require("mongoose")
// const Celebrity = require("../models/celebrity.model")
const Movie = require("../models/movie.model")

const dbName = "movies_mongoose"
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

// const celebrities = [
//     {
//         name: "Samuel L. Jackson",
//         occupation: "Actor",
//         catchPhrase: "Motherfucker"
//     },
//     {
//         name: "Gabriel Iglesias",
//         occupation: "Comedian",
//         catchPhrase: "Fluffy here, damn!"
//     },
//     {
//         name: "Venom",
//         occupation: "Fictional comic character",
//         catchPhrase: "Eyes, lungs, pancreas... so many snacks, so little time"
//     }
// ]

// Celebrity.create(celebrities)
//     .then(celebritiesCreated => console.log("Se han creado", celebritiesCreated.length, "celebridades en la base de datos"))
//     .catch(err => console.log('ERROR: ', err))

const movies = [{
        title: "Zombeavers",
        genre: "Comedy, Horror",
        plot: "A bunch of teens gets into trouble with a bunch of zombie beavers"
    },
    {
        title: "Venom",
        genre: "Action",
        plot: "A journalist gets possesed by an extraterrestrial bugger and starts livin' la vida loca"
    },
    {
        title: "Inception",
        genre: "Action",
        plot: "A group of dream experts gets into de dreams of a businessman to destroy it's father legacy"
    }
]

Movie.create(movies)
    .then(moviesCreated => console.log("Se han creado", moviesCreated.length, "películas en la base de datos"))
    .catch(err => console.log('ERROR: ', err))