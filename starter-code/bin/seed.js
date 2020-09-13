const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model');

// Define DB
const dbName = 'lab-mongoose-movies'

// Connect to DB
//mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const movies = [
    {
        title: '2 Fast 2 Furious',
        genre: ['Action', 'Crime'],
        plot: 'An ex - cop and his friend team up with a customs agent to catch a Miami criminal connected to money laundering.',
        image: 'https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
    },
    {
        title: 'La Vita è Bella',
        genre: ['War', 'Romance'],
        plot: 'A gentle Jewish-Italian waiter, Guido Orefice (Roberto Benigni), meets Dora (Nicoletta Braschi), a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue (Giorgio Cantarini). Their happiness is abruptly halted, however, when Guido and Giosue are separated from Dora and taken to a concentration camp. Determined to shelter his son from the horrors of his surroundings, Guido convinces Giosue that their time in the camp is merely a game.',
        image: 'https://i.pinimg.com/originals/5e/6e/8a/5e6e8a7f5e5e76c547da0962fefe9351.jpg'
    },
    {
        title: 'Forrest Gump',
        genre: ['Romance', 'Drama'],
        plot: 'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41dkwOlFjYL._AC_.jpg'
    }

]

Movie.create(movies)
    .then(moviesCreated => console.log('Se han creado', moviesCreated.length, 'celebridades en la base de datos'))
    .catch(err => console.log('Ha habido un error creando las celebridades:', err))



// const celebrities = [
//     {
//         name: 'Chadwick Boseman',
//         occupation: 'Actor',
//         catchPhrase: 'Wakanda Forever!'
//     },
//     {
//         name: 'Chris Evans',
//         occupation: 'Actor',
//         catchPhrase: 'I am Captain America'
//     },
//     {
//         name: 'Jessica Alba',
//         occupation: 'Actress',
//         catchPhrase: 'When I do comedy, I lose all inhibition and introspection. I no longer care.'
//     }
// ]

// Celebrity.create(celebrities)
//     .then(celebritiesCreated => console.log('Se han creado', celebritiesCreated.length, 'celebridades en la base de datos'))
//     .catch(err => console.log('Ha habido un error creando las celebridades:', err))
