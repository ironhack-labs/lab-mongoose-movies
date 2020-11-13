const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')

mongoose.connect('mongodb://localhost/starter-code')

const movies = [
    {
        title: 'Forrest Gump',
        genre: 'Comedy',
        plot: `In 1981, at a bus stop in Savahhan, a man named Forrest Gump recounts his life story to strangers who sit next to hin on a bench.`
    },
    {
        title: 'Ali G Indahouse',
        genre: 'Comedy',
        plot: `Ali G is the leader of Da West Saines Massiv, a fictional gang composed of wannabe gangsters from Staines.`
    },
    {
        title: 'V for Vendetta',
        genre: 'Thriller',
        plot: `In 2007, the world is in turmoil, with the United States fractured as a result of a second civil war and a pandemic of the "St. Mary's Virus" ravaging Europe.`
    }
]

Movie
    .create(movies)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.error(err))