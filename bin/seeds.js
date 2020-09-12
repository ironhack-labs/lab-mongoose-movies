//----- CELEBRITIES SEED -----


// const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')

// const dbName = 'celebrities-lab'

// mongoose.connect(`mongodb://localhost/${dbName}`, { userNewUrlParser: true, useUnifiedTopology: true })

// const celebrities = [{

//     name: 'Michael Jordan',
//     occupation: 'Basketball player',
//     catchPhrase: 'No bird soars too high, if he soars with his own wings'
// },
// {
//     name: 'Nina Simone',
//     occupation: 'Singer',
//     catchPhrase: 'Sometimes I sound like gravel, and sometimes I sound like coffee and cream'
// },
// {
//     name: 'Quentin Tarantino',
//     occupation: 'Films director',
//     catchPhrase: 'To me, America is just another market'
// }]

// Celebrity.create(celebrities)
//     .then(allCelebrities => console.log('Aquí tienes a tus estrellas', allCelebrities)).catch(error => console.log('ERROR: ', error))

//----- MOVIES SEED -----


const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'celebrities-lab'

mongoose.connect(`mongodb://localhost/${dbName}`, { userNewUrlParser: true, useUnifiedTopology: true })

const movies = [{

    title: 'La vida es bella',
    genre: 'Drama',
    plot: 'La transformación de un contexto dramático desde los ojos de un niño'
},
{
    title: 'Titanic',
    genre: 'Romantic, Drama, Action',
    plot: 'El amor rompe las barreras y prejuicios sociales en un transatlántico abocado a la tragedia'
},
{
    title: 'Kill Bill',
    genre: 'Action',
    plot: 'La sed de venganza lleva a la protagonista a la determinación de querer eliminar a todos los objetivos de una lista'
}]

Movie.create(movies)
    .then(allMovies => console.log('Aquí tienes tus películas', allMovies)).catch(error => console.log('ERROR: ', error))