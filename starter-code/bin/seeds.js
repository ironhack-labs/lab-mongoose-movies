const mongoose = require('mongoose')
const Movie = require('../models/Movie.model.js')

const DB_NAME = 'celebitiesAndMovies'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const movies = [
    {
        title: "Swamp Wars and the Return of the Shrek",
        genre: "Sci-Fi",
        plot: "After years of being dissapear Shrek arrives to save the galaxy."
        
    },

    {
        title: "Sherk and Fiona at Howarta",
        genre: "Drama",
        plot: "Shrek and Fiona, the new teacher´s at Howarts try to solve the mistery of the dark flying donkeys"
        
    },
    {
        title: "SwampRunner",
        genre: "Thriller",
        plot: "It´s 2049, and bionic Shrek, learn how was the Swamp before the Great Ginger War"  
    }
    

]

Movie.create(movies)
.then(moviesFromBD => {
    console.log(`Created ${moviesFromBD.length} movies`)
    mongoose.connection.close()
})
.catch(err=> console.log(`An error has occur:${err}`))