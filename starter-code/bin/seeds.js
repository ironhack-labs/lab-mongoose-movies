const mongoose = require("mongoose")
const Celebrities = require("../models/celebrity")

const famousPeople = [{
        name: "Isabel Pantoja",
        occupation: "Cantante",
        catchPhrase: "Dientes, dientes!"
    },
    {
        name: "Belen Esteban",
        occupation: "No sabemos",
        catchPhrase: "Andreita coño"
    }, {
        name: "Barbara Rey",
        occupation: "Show Gril",
        catchPhrase: "Me tire al rey de España"
    }
]

mongoose
    .connect('mongodb://localhost/MongooseMovies', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

        Celebrities.insertMany(famousPeople)

        .then((data) => {
            console.log(data)
            console.log("Chachi")
            moongose.disconnect()

        }).catch((err) => {
            console.log(err)
        })
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });