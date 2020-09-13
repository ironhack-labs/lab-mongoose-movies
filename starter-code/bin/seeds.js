const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')
const Movies = require('../models/movie.model')

const dbName = 'lab-movies-mongoose'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

// const celebrities = [

//     {
//         name: 'jason statham',
//         ocupation: ['actor', 'model', 'diver'],
//         catchPhrase: 'For every action there is a reaction'
//     },

//     {
//         name: 'Jennifer Lawrence',
//         ocupation: ['actor'],
//         catchPhrase: 'No, I am not methodical at all. As soon as they shout "cut", I think about food and moving on.'
//     },

//     {
//         name: 'Jim Carrey',
//         ocupation: ['humorist', 'actor', 'writer', 'painter', 'singer'],
//         catchPhrase: 'I get up some mornings, sit down and with my coffee in hand look at my garden.'
//     }
// ]


const movies = [

    {
        title: 'Tenet',
        genre: 'Thriller',
        plot: 'Armado con una sola palabra, Tenet, y luchando por la supervivencia del planeta, el protagonista viaja a un mundo crepuscular de espionaje internacional en una misión que supera los límites del tiempo real. No son realmente viajes sino inversión en el tiempo.'
    },

    {
        title: 'Mars Attack',
        genre: 'Acción',
        plot: 'Cuando los marcianos rodean la Tierra con una gigantesca flota de platillos volantes, el presidente de los Estados Unidos, James Dale (Jack Nicholson), acompañado por su Secretario de Prensa, Jerry Ross (Martin Short), su asesor científico, el profesor Donald Kessler (Pierce Brosnan) y sus asesores militares, los generales Decker (Rod Steiger) y Casey (Paul Winfield), dirige un discurso a la nación acerca del histórico evento.'
    },

    {
        title: 'Dumb and Dumber',
        genre: 'Comedy',
        plot: 'Lloyd Christmas (Jim Carrey) es un ingenuo conductor de limusinas en Providence, Rhode Island, que se encapricha con su acompañante, Mary Swanson (Lauren Holly), cuando él la lleva al aeropuerto. Mary se dirigía a casa de su familia en Aspen, Colorado, pero deja un maletín en el aeropuerto. Lloyd, recupera el maletín antes de que un par de matones lleguen a recogerlo, corriendo delante de ellos para enganchar el maletín. Lloyd no es capaz de alcanzar a Mary a tiempo.'
    }
]




Movies.create(movies)
    .then(allMoviesCreated => console.log('Has been created', allMoviesCreated.length, 'movies in the BBDD'))