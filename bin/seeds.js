const mongoose = require('mongoose')
const dbName = 'celebrities-database'
mongoose.connect(`mongodb://localhost/${dbName}`)


//model
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')


//Data
const celebrities = [
    {
        name: 'William Bradley Pitt',
        occupation: 'Conocido como Brad Pitt, es un actor y productor de cine estadounidense',
        catchPhrase: 'Eternamente joven'

    },
    {
        name: 'Angelina Jolie',
        occupation: 'Es una actriz, modelo, filántropa, actriz de voz, directora, guionista y activista por los derechos de las mujeres, de nacionalidad estadounidense y camboyana.',
        catchPhrase: 'Una frase cualquiera de Angelina Jolie'

    },
    {
        name: 'Will Smith',
        occupation: 'más conocido como Will Smith, es un actor, rapero, productor de cine, productor de televisión y productor discográfico estadounidense.',
        catchPhrase: 'Una frase cualquiera de Will Smith'

    },
]

const movies = [
    {
        title: 'El señor de los Anillos',
        genre: 'Drama',
        plot: 'Basicamente son orcos humanos y elfos dandose hostias como panes'
    },
    {
        title: 'Las cronicas de Narnia',
        genre: 'Ciencia Ficcion',
        plot: 'Como El señor de los Anillo pero mal hecha'
    },
    {
        title: 'Interstellar',
        genre: 'Ciencia Ficcion',
        plot: 'Una de las mejores pelicuas que veras en tu vida socio'
    }
]
//seed

Celebrity
    .create(celebrities)
    .then(allTheCelebrities => {
        console.log(`Created ${allTheCelebrities.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the books'))

Movie
    .create(movies)
    .then(allTheCelebrities => {
        console.log(`Created ${allTheCelebrities.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the books'))



