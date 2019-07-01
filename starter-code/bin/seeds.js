const mongoose = require("mongoose")
const Celebrities = require("../models/celebrity")

const Movies = require("../models/movie")

// const famousPeople = [{
//         name: "Isabel Pantoja",
//         occupation: "Cantante",
//         catchPhrase: "Dientes, dientes!"
//     },
//     {
//         name: "Belen Esteban",
//         occupation: "No sabemos",
//         catchPhrase: "Andreita coño"
//     }, {
//         name: "Barbara Rey",
//         occupation: "Show Gril",
//         catchPhrase: "Me tire al rey de España"
//     }
// ]

const famousMovies = [{
    title: "Shaft",
    genre: "action",
    plot: "Shaft is the most rude black police of Harlem and it is availble to demostrate it for everyone"
}, {
    title: "Rocky",
    genre: "sport",
    plot: "Rocky Balboa is the typical boxer of Philadelphia but he are going to have the opportunity to be the heavyweight Champion"
}, {
    title: "Shark",
    genre: "trhiller",
    plot: "One white shark fright the bay of Los Angeles"
}]

mongoose
    .connect('mongodb://localhost/MongooseMovies', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

        // Celebrities.insertMany(famousPeople)
        Movies.insertMany(famousMovies)

        .then((data) => {
            console.log(data)
            console.log("Chachi")
            mongoose.disconnect()

        }).catch((err) => {
            console.log(err)
        })
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });