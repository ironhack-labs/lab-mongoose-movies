require('dotenv').config()
const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movies = require('../models/movie.model')

mongoose.connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })

const celebrities = [
    {
        name: "Tony Montana",
        ocupation: "Actor",
        catchPhrase: "Say ‘hello’ to my little friend!"
    },
    {
        name: "Tom Cruise",
        ocupation: "Actor",
        catchPhrase: "Bond..James Bond"
    },
    {
        name:  "Robert De Niro",
        ocupation: "Actor",
        catchPhrase: "You talkin to me?"
    },
    {
        name: "Kurt Cobain",
        ocupation: "Singer",
        catchPhrase: "It's better to burn than to fade out"
    }
]


const movies = [
    {
        title: "Black Panther",
        genre: "Action",
        plot: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into\
        a new future and must confront a challenger from his country's past."
    },
    {
        title: "The Mandalorian",
        genre: "Action",
        plot: "The travels of a lone bounty hunter in the outer reaches of the galaxy,\
        far from the authority of the New Republic."
    },
    {
        title: "Wonder Woman",
        genre: "Adventure",
        plot: "ast forward to the 1980s as Wonder Woman's\
         next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah."
    },
    {
    
        title: 'The social network',
        genre: 'Drama',
        plot:  'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins\
         who claimed he stole their idea, and by the co-founder who was later squeezed out of the business'
    }
]


mongoose.connection.collections['celebrities'].drop(() => console.log("Collection droped")) 
mongoose.connection.collections['movies'].drop(() => console.log("Collection droped")) 



Celebrity.create(celebrities)
    .then( allCelebrities => console.log('Se han creado', allCelebrities.length, 'celebrities en la BBDD'))
    .catch(err => console.log('ERROR: ', err))

Movies.create(movies)
    .then(allMovies => console.log('Se han creado', allMovies.length, 'peliculas'))
    .catch(err => console.log('Error: ', err))
//mongoose.disconnect()