const mongoose = require("mongoose")
const Movie = require('../models/movie-model')

const dbName = "movies-weekendLab"

mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [{
    title: 'Fight Club',
    genre: ['Drama'],
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
  },
  {
    title: 'Inception',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    title: 'The Matrix',
    genre: ['Action', 'Sci-Fi'],
    plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  },
  {
    title: 'Interstellar',
    genre:['Adventure', 'Drama', 'Sci-Fi'],
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    title: 'Gisaengchung - Parasite',
    genre:['Comedy', 'Drama', 'Thriller'],
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    title: 'Pride',
    genre:['Biography', 'Comedy', 'Drama'],
    plot: "U.K. gay activists work to help miners during their lengthy strike of the National Union of Mineworkers in the summer of 1984."
  }
]

Movie
    .create(movies)
    .then(response => {
        console.log(`Estas son las pelis ${response}`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`Ha habido un error: ${err}`))