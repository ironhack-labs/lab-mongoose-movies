const mongoose = require("mongoose")
const dbname = 'CELEBRITYDB'
mongoose.connect(`mongodb://localhost/${dbname}`)

const Celebrity = require('../models/celebritymodel')

const Movie = require('../models/moviemodel')


// SEED DE CELEBRITIES

// const celebrities = [
//     {
//         name: 'Leonardo di Caprio',
//         occupation: 'Work hard',
//         catchPhrase: 'Todos somos iguales'
//     },
//     {
//         name: 'Kim Kardash',
//         occupation: 'Try to improve her style',
//         catchPhrase: 'Antes muerta que sencilla'
//     },
//     {
//         name: 'Paco Martinez Soria',
//         occupation: 'Adaptandose a la city',
//         catchPhrase: 'La ciudad no es para mi'
//     }
// ]


// Celebrity.create(celebrities)
//     .then(all => console.log('------La base de datos se ha creado correctamente ------=>', all))
//     .catch(err => console.log(err))


// SEED DE MOVIES


const movies = [
        {
            title: 'Dos tontos muy tontos',
            genre: 'Comedia',
            plot: 'Dos tontetes haciendo de las suyas'
        },
        {
            title: 'Titanic',
            genre: 'Drama',
            plot: 'Un barco que se la pega y gente que se ahoga',
        },
        {
            title: 'El señor de los anillos',
            genre: 'Aventura',
            plot: 'Enanos y ogros peleando por un anillo'
        }
    ]
    
    
    Movie.create(movies)
        .then(all => console.log('------La base de datos se ha creado correctamente ------=>', all))
        .catch(err => console.log(err))