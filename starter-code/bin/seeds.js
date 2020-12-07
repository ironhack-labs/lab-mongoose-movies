const celebritiesData = [
    {
        name: 'Kanye West',
        occupation: 'rapper',
        catchPhrase: 'dope'
    },
    {
        name: 'Salvador Dali',
        occupation: 'painter',
        catchPhrase: 'loco'
    },
    {
        name: 'Natalie Portman',
        occupation: 'actress',
        catchPhrase: 'Leon'
    }
]

const movieData = [
    {
        title: 'Green Book',
        genre: 'Drama',
        plot: 'cool'
    },
    {
        title: 'Lord of the Rings',
        genre: 'Scifi',
        plot: 'best movie ever'
    },
    {
        title: 'Blackkklansman',
        genre: 'detective drama',
        plot: 'crazy real story'
    }
]

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')
const dotenv = require('dotenv').config() // cada vez que use una variable de entrono en un archivo hay que requerir dotenv
const dbOptions = { // para qué es dbOptions ? 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function seedDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        Celebrity.remove()
        const celebs = await Celebrity.create(celebritiesData)
        console.log(celebs)
        const movies = await Movie.create(movieData)
        console.log(movies)
        mongoose.connection.close()
    } catch (err) {
        console.log(err)
    }
}

seedDb()