const mongoose = require('mongoose');
const Celebrity = require('../model/celebrity');
const Movie = require('../model/movie');

mongoose.connect('mongodb://localhost/starter-code')

const celebrities = [{
    name: 'Manu Gavassi',
    occupation: 'actress, singer',
    catchPhrase: 'cute but phsyco'
},
{
    name: 'Felipe Prior',
    occupation: 'architect',
    catchPhrase: "i'm a player"
},
{
    name: 'Mari Gonzalez',
    occupation: 'blogger',
    catchPhrase: 'this is me <3'
}]

// Celebrity.create(celebrities)
//     .then(response => {
//         console.log(response)
//         mongoose.connection.close()
//     })
//     .catch(error => console.log(error))


const movies = [{
    title: 'Harry Potter',
    genre: 'fantasy',
    plot: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. "
},
{
    title: 'Star Wars',
    genre: 'Sci-fi',
    plot: "Star Wars is an American epic space-opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon."
},
{
    title: 'The Avengers',
    genre: 'action',
    plot: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012's The Avengers and 2015's Avengers: Age of Ultron, and the nineteenth film in the Marvel Cinematic Universe (MCU)."
}]

Movie.create(movies)
    .then(response => {
        console.log(response)
        mongoose.connection.close()
    })
    .catch(error => console.log(error))