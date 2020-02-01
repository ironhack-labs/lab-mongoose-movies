const movieModel = require("./../models/movie")
const mongoose = require("mongoose")

const moviesList = [{
    title: 'Casino',
    genre: 'Drama',
    plot: 'some mafia stuff'
}, {
    title: 'Once Upon a Time in Hollywood',
    genre: 'Drama, Comedy',
    plot: 'some tarantino movie'
}, {
    title: 'Joker',
    genre: 'Drama',
    plot: 'DC Joker\'s story'
}]

mongoose
    .connect('mongodb://localhost/starter-code', {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

movieModel.create(moviesList).then(dbRes => console.log(dbRes)).catch(dbErr => console.log(dbErr))