require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

let dbURL = process.env.DBURL;
mongoose
    .connect(dbURL, {useMongoClient: true})
    .then(o => {
        Promise.all([
            Celebrity.create(celebrities),
            Movie.create(movies)
        ])
        .then(() => mongoose.disconnect())
        .catch(err => console.log(err))
    })

let celebrities = [
    {name: 'Keanu Reeves', occupation: 'Actor', catchPhrase: 'This is America!'},
    {name: 'Tom Cruise', occupation: 'Actor', catchPhrase: 'Españoles muy españoles mucho españoles'},
    {name: 'Will Smith', occupation: 'Actor', catchPhrase: 'Yes we can'}
]

let movies = [
    {title: "Matrix", genre: "SciFi", plot: "Esquivar balas"},
    {title: "Titanic", genre: "Drama", plot: "Barco que se choca"},
    {title: "Fast and Furious", genre: "Action", plot: "Coches caros"}
]