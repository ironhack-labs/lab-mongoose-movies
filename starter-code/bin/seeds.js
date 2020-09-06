/* const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const celebrityInfo = [
    {
        name: "Radku",
        occupation: "Cook",
        catchPhrase: "Give your best"
    },
    {
        name: "Dodo",
        occupation: "Singer",
        catchPhrase: "To infinity and beyond"
    },
    {
        name: "Masha",
        occupation: "Boss",
        catchPhrase: "Just do it"
    }
]

mongoose
.connect('mongodb://localhost/lab-mongoose-movies', {userNewParser: true})
.then(x => {
    console.log(`Connected to DB! Name is: "${x.connections[0].name}"`)
    return Celebrity.insertMany(celebrityInfo)
})
.then(celebrityInfo => {
    console.log(celebrityInfo)
    mongoose.disconnect()
})
.catch(err => {
    console.log('db mongoose connect err', err)
}) */

const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')

const movieInfo = [
    {
        title: 'Brave Tomatos',
        genre: 'Horror',
        plot: "Intriguing"
    }, 
    {
        title: "Sad Carrot",
        genre: "Drama",
        plot: "Sad story about a lonely Carrot"
    }, 
    {
        title: "Happy Potato",
        genre: "Comedy",
        plot: "It will make you smile"
    }
]

mongoose
.connect('mongodb://localhost/lab-mongoose-movies', {userNewParser: true})
.then(x => {
    console.log(`Connected to DB! Name is: "${x.connections[0].name}"`)
    return Movie.insertMany(movieInfo)
})
.then(movieInfo => {
    console.log(movieInfo)
    mongoose.disconnect()
})
.catch(err => {
    console.log('db mongoose connect err', err)
})