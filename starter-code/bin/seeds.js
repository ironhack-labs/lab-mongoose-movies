require('dotenv').config({path: `../.env`});

const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie")

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected 💾")

        agregarDatosMovies();
        agregarDatosCelebrities();
    })


const celebrities = [{
        name: "Robert Downey Jr",
        occupation: "Iron Man",
        catchPhrase: "I am Iron Man"
    },
    {
        name: "Chris Evans",
        occupation: "Retired",
        catchPhrase: "Avengers... Assemble"
    },
    {
        name: "Mark Ruffalo",
        occupation: "Hulk-ing",
        catchPhrase: "Hulk SMASH!"
    }
]


const movies = [{
        title: "Avengers",
        genre: "Action",
        plot: "4 Avengers vs Army"
    },
    {
        title: "Avengers: Infinity War",
        genre: "Action",
        plot: "Avengers asks themselves if they can win"

    },
    {
        title: "Avengers: EndGame",
        genre: "Action",
        plot: "All Avengers vs Giant Army"
    }
]



async function agregarDatosMovies() {
    await Movie.insertMany(movies)
        .then(() => {
            console.log('Adding - Multiple Data');
        })
        .catch(() => {
            console.log('Error Adding - Multiple Data');
        });
}

async function agregarDatosCelebrities() {
    await Celebrity.insertMany(celebrities)
        .then(() => {
            console.log('Adding - Multiple Data');
        })
        .catch(() => {
            console.log('Error Adding - Multiple Data');
        });
} 