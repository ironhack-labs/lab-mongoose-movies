const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

mongoose.connect('mongodb://localhost/starter-code')


const celebrities = [
    {
        name: 'Eazy-E',
        occupation: 'Rapper',
        catchPhrase: 'It was \'Gangsta Gangsta\' at the top of the list Then I played my own shit, it went somethin\' like this',
    },
    {
        name: 'Justin Bieber',
        occupation: 'Singer',
        catchPhrase: 'If I was your boyfriend, I\'d never let you go I can take you places you ain\'t never been before Baby take a chance or you\'ll never ever know I got money in my hands that I\'d really like to blow',
    },
    {
        name: 'Patrick Stewart',
        occupation: 'Actor',
        catchPhrase: 'Acting.',
    }
]

Celebrity
.create(celebrities)
.then(celebList => {
    console.log(celebList)
    mongoose.connection.close()
})
.catch(err => console.error(err))


const movies = [
    {
        title: 'Stardust',
        genre: 'Fantasy',
        plot: 'In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he\'ll retrieve a fallen star by venturing into the magical realm.',
    },
    {
        title: 'The Road to El Dorado',
        genre: 'Animation',
        plot: 'Two swindlers get their hands on a map to the fabled city of gold, El Dorado.',
    },
    {
        title: 'Wreck-It Ralph',
        genre: 'Animation',
        plot: 'A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.',
    }
]

Movie
.create(movies)
.then(movieList => {
    console.log(movieList)
    mongoose.connection.close()
})
.catch(err => console.error(err))