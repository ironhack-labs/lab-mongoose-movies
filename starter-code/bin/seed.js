const mongoose = require('mongoose')
/*const Celebrity = require('../models/Celebrity')

const celebrities = [
    {
        name: 'Pedro Pascal',
        occupation: 'comedian',
        catchPhrase: 'I/m going to kill that'
    }]

mongoose
    .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        return Celebrity.insertMany(celebrities)
    })
    .then(celebrities => {
        console.log(celebrities)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });
*/

const Movie = require('../models/Movie')

const movies = [
    { 
        title: 'Mad Max: Fury Road',
        genre: 'Action',
        plot: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.'
    }]

mongoose
    .connect('mongodb://localhost/starter-code', {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        return Movie.insertMany(movies)
    })
    .then(movies => {
        console.log(movies)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });