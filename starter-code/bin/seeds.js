const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity')
const Movie     = require('../models/movie')
const dbName = "mongoose-Movies-Exercise";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

// const celebrities = [
//     {
//         name: 'Radamel Falcao',
//         occ: 'Soccer Player',
//         catchPhrase: 'I am a man who dreams a lot, but I am also aware that you have to go step by step'
//     },
//     {
//         name: 'Leonardo DiCaprio',
//         occ: 'Actor',
//         catchPhrase: 'When you have nothing, you have nothing to lose.'
//     },
//     {
//         name: 'Elon Musk',
//         occ: 'CEO of Tesla, Inc',
//         catchPhrase: 'Your day will be good if you wake up knowing that you will build a better future. If you don/'t, you will have a bad day'
//     }
// ]

// Celebrity.create(celebrities)
//     .then(theCelebrities => {
//         console.log(`${theCelebrities.length} Celebrities created!`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(`An error ocurred: ${err}`))   



const movies = [
    {
        title: "Avatar",  
        genre: 'Adventure',
        plot: 'Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra.'
    },
    {
        title: "Avatar",  
        genre: 'Adventure',
        plot: 'Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra.'
    },
    {
        title: "Avatar",  
        genre: 'Adventure',
        plot: 'Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra.'
    },
]

Movie.create(movies)
    .then(allMovies => {
        console.log(`${allMovies.length} movies created!`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`Ups, something wrong happenedL ${err}`))
