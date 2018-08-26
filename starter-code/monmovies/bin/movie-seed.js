const mongoose = require('mongoose')
const movie = require('../models/movie')

const dbName = 'monmovies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: "Jaws",
        genre: "mockumentary",
        plot: "An innocent shark is murdered"
    },
    {
        title: "Jaws 2",
        genre: "mockumentary",
        plot: "An innocent shark is murdered"
    },
    {
        title: "Jaws III",
        genre: "mockumentary",
        plot: "An innocent shark is murdered"
    }
]

movie.create(movies, err => {
    if (err) {
        throw err
    }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
})