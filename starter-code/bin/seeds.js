// es un archivo semilla para alimentar la base de datos. 
const mongoose = require('mongoose');
// requerimos el archivo celebrity que esta en nuestra carpeta models.
const CelebrityModel = require('../models/celebrity');
// requerimos el archivo movie que esta en nuestra carpeta models.
const MovieModel = require('../models/movie');

// nos conectamos a la base de datos. 
mongoose.connect('mongodb://localhost/celebrity')

const myCelebrities = [
    {
        name: 'Courtney love', 
        occupation: 'singer',
        catchPhrase: 'You dont even do rock stars anymore!'
    }, 
    {
        name: 'Kanye West', 
        occupation: 'singer',
        catchPhrase: 'Imma let you finish, but Beyoncé had one of the best videos of all time!'
    },
    {
        name: 'Paris Hilton', 
        occupation: 'Artist',
        catchPhrase: 'Thats hot'
    }
]

const myMovies = [
    {
        title: 'Ghost World', 
        genre: 'Drama',
        plot: 'Movie about girls'
    }, 
    {
        title: 'Cruel Intentions', 
        genre: 'Drama',
        plot: 'Cocaine film inside the cross of a rosary'
    },
    {
        title: 'Mean Girls', 
        genre: 'Drama',
        plot: 'Another movie about girls'
    }
]

CelebrityModel
    .create(myCelebrities)
    .then(data => {
        console.log(data)
        mongoose.connection.close(() => console.log('Connection Closed'))
    })
    .catch(err => console.log(err))

MovieModel
    .create(myMovies)
    .then(data => {
        console.log(data)
        mongoose.connection.close(() => console.log('Connection Closed'))
    })
    .catch(err => console.log(err))