// const mongoose = require('mongoose')
// const Celebrity = require('../models/movie.model')

// const dbName = 'celebrities-webmad1020'
// mongoose.connect(`mongodb://localhost/${dbName}`)


// const celebrities = [
//     {
//         name: 'John Cobra',
//         occupation: 'musician',
//         catchPhrase: 'Comedme la p...',
//     },
//     {
//         name: 'Chimo Bayo',
//         occupation: 'musician',
//         catchPhrase: 'Chiquitan chiquititan tan tan que tun pan pan que tun pan',
//     },
//     {
//         name: 'ElAdri',
//         occupation: 'musician',
//         catchPhrase: 'De que valen tantas rosas si prefieres las espinas',
//     },
// ]



// Celebrity
//     .create(celebrities)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} celebrities`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))




const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'celebrities-webmad1020'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: 'Short Term 12',
        genre: 'Drama',
        plot: "A 20-something supervising staff member of a residential treatment facility navigates the troubled waters of that world alongside her co-worker and longtime boyfriend."
    },
    {
        title: 'The Florida Project',
        genre: 'Drama',
        plot: "Set over one summer, the film follows precocious six-year-old Moonee as she courts mischief and adventure with her ragtag playmates and bonds with her rebellious but caring mother, all while living in the shadows of Walt Disney World.",
    },
    {
        title: 'C.R.A.Z.Y',
        genre: 'Drama',
        plot: "A young French-Canadian, growing up in the 1960s and 1970s, struggles to reconcile his emerging homosexuality with his father's conservative values and his own Catholic beliefs.",
    },
]



Movie
    .create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))