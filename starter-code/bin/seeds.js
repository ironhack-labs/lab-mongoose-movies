const mongoose = require('mongoose')

// const Celebrity = require("../models/Celebrity")

// const celebrities = [{
//     name: 'Esperanza Spalding',
//     ocupation: 'Singer',
//     catchPhrase: 'I know you know'
// }, {
//     name: 'Liam',
//     ocupation: 'Piss everywhere',
//     catchPhrase: 'Miau'
// }, {
//     name: 'Susana Gimenez',
//     ocupation: 'Tv presenter',
//     catchPhrase: 'Vivo?'
// }]

const Movie = require("../models/Movie")

const movies = [{
    title: 'Esperanza Spalding',
    genre: 'Singer',
    plot: 'I know you know'
}, {
    title: 'Liam',
    genre: 'Piss everywhere',
    plot: 'Miau'
}, {
    title: 'Susana Gimenez',
    genre: 'Tv presenter',
    plot: 'Vivo?'
}]

const MONGODB_URI = 'mongodb://localhost:27017/celebrityDB';

mongoose
    .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(self => {
        console.log(`Connected to the database: "${self.connection.name}"`);
        Movie.create(movies, () => console.log('Feedback'))
    })