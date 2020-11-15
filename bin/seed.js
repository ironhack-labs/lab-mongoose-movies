const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'dbMovie'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: "Star Wars",
        genre: "Sci-fi",
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
    },
    {
        title: "Raiders of the lost Ark",
        genre: "Adventure",
        plot: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    },
    {
        title: "Blade Runner",
        genre: "Sci-fi",
        plot: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator."
    }
]

Movie
    .create(movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error occured', err))