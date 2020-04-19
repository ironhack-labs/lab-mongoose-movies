const mongoose = require('mongoose')
const Celebrity = require('../models/celebrityModel')
const Movie = require('../models/movieModel')

const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

// const celebrities = [

//     {
//         name: 'John Travolta',
//         occupation: 'actor',
//         catchPhrase: 'Hey you'
//     },

//     {
//         name: 'Scarlett Johansson',
//         occupation: 'actress',
//         catchPhrase: ' Who me?'
//     },

//     {
//         name: 'Pedro Sánchez',
//         occupation: ' comedian',
//         catchPhrase: 'Yes, you'
//     }

// ]

// Celebrity.create(celebrities)
//     .then(allCelebrities => {
//         console.log(`${allCelebrities.length} celebrities created!`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(`Ups, something wrong happenedL ${err}`))

const movies = [

    {
        title: 'Avatar',
        genre: 'Adventure',
        plot: 'Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra.'
    },
    {
        title: 'Interstellar',
        genre: 'Ciencia ficcion',
        plot: 'Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.'
    },
    {
        title: 'La cumbre escarlata',
        genre: 'Drama',
        plot: 'Como consecuencia de una tragedia familiar, una escritora es incapaz de elegir entre el amor de su amigo de la infancia y la tentación que representa un misterioso desconocido. En un intento por escapar de los fantasmas del pasado, se encuentra de pronto en una casa que respira, sangra… y recuerda.'
    }



]

Movie.create(movies)
    .then(allMovies => {
        console.log(`${allMovies.length} movies created!`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`Ups, something wrong happenedL ${err}`))