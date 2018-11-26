const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')

mongoose
    .connect('mongodb://localhost/movies-app', {useNewUrlParser: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const celebrities = [
    {"name": "Pily",
        "occupation" : "actor",
        "catchPhrase" : "Quien es bliss?"},
    {"name" : "Ricky",
        "occupation" : "actor",
        "catchPhrase" : "asdadsa"},
    {"name" : "Mike",
        "occupation" : "actor",
        "catchPhrase" : "Me traicionaste por última vez"}
]

Celebrity.create(celebrities)
    .then(books => {
        console.log(`${books.length} books created`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log('Something went wrong', err);
    })

// const movies = [
//         {"title": "Aventuras en Wework",
//             "genre" : "terror",
//             "plot" : "Alumnos no encuentran leche en el edificio 😔"},
//         {"title" : "Aventuras en Ironhack",
//             "genre" : "ficción",
//             "plot" : "Alumnos ya murieron por tantas preguntas de Sebas 😵"},
//         {"title" : "IDK",
//             "genre" : "idk?",
//             "plot" : "Qué hago aquí 😥"}
//     ]
    
//     Movie.create(movies)
//         .then(movieRes => {
//             console.log(`${movies.length} movies created`);
//             mongoose.connection.close();
//         })
//         .catch(err => {
//             console.log('Something went wrong', err);
//         })