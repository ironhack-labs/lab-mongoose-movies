const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

const dbName = 'movies';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const celebrities = [{
    name: 'Jennifer Lawrence',
    occupation: 'Actress',
    catchPhrase: 'Be strong.Don’ t be a follower.Always do the right thing.'
}, {
    name: 'Cristopher Nolan',
    occupation: 'Actor',
    catchPhrase: 'Everything has beauty, but not everyone sees it.'
}, {
    name: 'Jennifer Aniston',
    occupation: 'Actress',
    catchPhrase: 'Better passion and death.'
}]

Celebrity.create(celebrities)
    .then(celebrities => console.log(celebrities))
    .catch(err => console.log(`Ha sucedido un error: ${err}`))

const movies = [{
    title: 'The Hunger Games',
    genre: 'Action',
    plot: 'The Hunger Games is a series of young adult dystopian novels written by American novelist Suzanne Collins'
}, {
    title: 'Interestellar',
    genre: 'Drama',
    plot: 'Interstellar is a 2014 epic science fiction film directed, co-written and produced by Christopher Nolan'
}, {
    title: 'Scary Movie',
    genre: 'Comedy',
    plot: 'Scary Movie is a 2000 American parody slasher film directed by Keenen Ivory Wayans.'
}]

Movie.create(movies)
    .then(movies => console.log(movies))
    .catch(err => console.log(`Ha sucedido un error: ${err}`))